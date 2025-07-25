import { isErrored } from '@attio/fetchable';
import { eventEmitter, EventType } from '../../api/events';
import prisma, { Patron } from '../../prisma';
import { sendDiscordWebhook } from '../../services/discord.service';
import {
  getPatrons,
  STATIC_PATRON_GROUP_IDS,
  STATIC_PATRON_PLAYER_IDS
} from '../../services/patreon.service';
import { omit } from '../../utils/omit.util';
import { Job } from '../job.class';

export class SyncPatronsJob extends Job<unknown> {
  async execute() {
    if (!process.env.PATREON_BEARER_TOKEN || process.env.NODE_ENV !== 'production') {
      return;
    }

    await syncPatrons();
    await syncBenefits();
  }
}

async function syncPatrons() {
  const currentPatrons = await prisma.patron.findMany();

  const toAdd: Patron[] = [];
  const toUpdate: Patron[] = [];
  const toDelete: Patron[] = [];

  const patronsResult = await getPatrons();

  if (isErrored(patronsResult)) {
    // Throw an error to ensure the job fails and can be retried
    throw patronsResult.error;
  }

  if (patronsResult.value.every(p => p.patron.discordId === null)) {
    // Found no Discord IDs in the patrons list. This is likely an outage on Patreon's side.
    return;
  }

  const newPatronIds = patronsResult.value.map(p => p.patron.id);

  const updatedFieldsMap = new Map<string, string>();

  patronsResult.value.forEach(p => {
    const match = currentPatrons.find(cp => cp.id === p.patron.id);

    if (!match) {
      toAdd.push(p.patron);
    } else if (!p.isInGracePeriod && needsUpdate(p.patron, match)) {
      toUpdate.push(p.patron);

      // Keep track of which of these fields was updated (we only care about notifications for these)
      if (p.patron.tier !== match.tier) {
        updatedFieldsMap.set(p.patron.id, 'tier');
      } else if (p.patron.discordId !== match.discordId) {
        updatedFieldsMap.set(p.patron.id, 'discordId');
      }
    }
  });

  currentPatrons.forEach(p => {
    if (!newPatronIds.includes(p.id)) {
      toDelete.push(p);
    }
  });

  if (toAdd.length === 0 && toUpdate.length === 0 && toDelete.length === 0) {
    return;
  }

  await prisma.$transaction(async transaction => {
    if (toAdd.length > 0) {
      await transaction.patron.createMany({
        data: toAdd
      });
    }

    if (toDelete.length > 0) {
      await transaction.patron.deleteMany({
        where: { id: { in: toDelete.map(p => p.id) } }
      });
    }

    if (toUpdate.length > 0) {
      for (const patron of toUpdate) {
        await transaction.patron.update({
          where: { id: patron.id },
          data: omit(patron, 'groupId', 'playerId')
        });
      }
    }
  });

  toAdd.forEach(p => {
    const discordTag = p.discordId ? `<@${p.discordId}>` : '';

    sendDiscordWebhook({
      content: `**🎉 New Patron:** ${p.name} (T${p.tier}) - ${discordTag}`,
      webhookUrl: process.env.DISCORD_PATREON_WEBHOOK_URL
    });
  });

  toDelete.forEach(p => {
    const discordTag = p.discordId ? `<@${p.discordId}>` : '';

    sendDiscordWebhook({
      content: `**😢 Patron canceled:** ${p.name} (T${p.tier}) - ${discordTag}`,
      webhookUrl: process.env.DISCORD_PATREON_WEBHOOK_URL
    });
  });

  Array.from(updatedFieldsMap.entries()).forEach(([patronId, field]) => {
    const p = patronsResult.value.find(patron => patron.patron.id === patronId)?.patron;
    if (!p) return;

    const discordTag = p.discordId ? `<@${p.discordId}>` : '';

    if (field === 'tier') {
      sendDiscordWebhook({
        content: `**🔔 Patron tier changed:** ${p.name} (T${p.tier}) - ${discordTag}`,
        webhookUrl: process.env.DISCORD_PATREON_WEBHOOK_URL
      });
    } else if (field === 'discordId') {
      sendDiscordWebhook({
        content: `**🔔 Patron Discord changed:** ${p.name} (T${p.tier}) - ${discordTag}`,
        webhookUrl: process.env.DISCORD_PATREON_WEBHOOK_URL
      });
    }
  });
}

async function syncBenefits() {
  const updatedPatrons = await prisma.patron.findMany();

  const patronGroupIds = [
    ...updatedPatrons.map(p => p.groupId).filter((id): id is number => id !== null),
    ...STATIC_PATRON_GROUP_IDS
  ];

  const patronPlayerIds = [
    ...updatedPatrons.map(p => p.playerId).filter((id): id is number => id !== null),
    ...STATIC_PATRON_PLAYER_IDS
  ];

  const newPatronGroups = await prisma.group.findMany({
    where: {
      id: { in: patronGroupIds },
      patron: false
    }
  });

  await prisma.$transaction(async transaction => {
    // Every player who wasn't a patron and should be, becomes a patron
    await transaction.player.updateMany({
      where: {
        id: { in: patronPlayerIds },
        patron: false
      },
      data: {
        patron: true
      }
    });

    // Every player who was a patron and shouldn't be, is no longer a patron
    await transaction.player.updateMany({
      where: {
        id: { notIn: patronPlayerIds },
        patron: true
      },
      data: {
        patron: false
      }
    });

    // Every group who wasn't a patron and should be, becomes a patron
    await transaction.group.updateMany({
      where: {
        id: { in: patronGroupIds },
        patron: false
      },
      data: {
        patron: true
      }
    });

    // Every group who was a patron and shouldn't be, is no longer a patron
    await transaction.group.updateMany({
      where: {
        id: { notIn: patronGroupIds },
        patron: true
      },
      data: {
        patron: false,
        bannerImage: null,
        profileImage: null
      }
    });

    // Delete any social links from non-patron groups
    await transaction.groupSocialLinks.deleteMany({
      where: {
        groupId: { notIn: patronGroupIds }
      }
    });
  });

  newPatronGroups.forEach(group => {
    eventEmitter.emit(EventType.GROUP_UPDATED, {
      groupId: group.id
    });
  });
}

function needsUpdate(a: Patron, b: Patron) {
  return a.name !== b.name || a.email !== b.email || a.tier !== b.tier || a.discordId !== b.discordId;
}
