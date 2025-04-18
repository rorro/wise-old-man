import prisma from '../../../../prisma';
import { PlayerStatus } from '../../../../utils';
import { NotFoundError } from '../../../errors';
import { PlayerDetails } from '../player.types';
import { formatPlayerDetails, standardize } from '../player.utils';

async function fetchPlayerDetails(username: string): Promise<PlayerDetails> {
  const player = await prisma.player.findFirst({
    where: { username: standardize(username) },
    include: { latestSnapshot: true, annotations: true }
  });

  if (!player) {
    throw new NotFoundError('Player not found.');
  }

  if (!player.latestSnapshot) {
    // If this player's "latestSnapshotId" isn't populated, fetch the latest snapshot from the DB
    const latestSnapshot = await prisma.snapshot.findFirst({
      where: { playerId: player.id },
      orderBy: { createdAt: 'desc' }
    });

    if (latestSnapshot) {
      player.latestSnapshot = latestSnapshot;
    }
  }

  if (player.status !== PlayerStatus.ARCHIVED) {
    return formatPlayerDetails(player, player.latestSnapshot, player.annotations);
  }

  const currentArchive = await prisma.playerArchive.findFirst({
    where: {
      playerId: player.id,
      restoredAt: null
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  return formatPlayerDetails(player, player.latestSnapshot, player.annotations, currentArchive);
}

export { fetchPlayerDetails };
