import dayjs from 'dayjs';
import prisma from '../../../../prisma';
import { BadRequestError, NotFoundError } from '../../../errors';
import { sortMembers } from '../group.utils';

async function fetchGroupMembersCSV(groupId: number): Promise<string> {
  const memberships = await prisma.membership.findMany({
    where: {
      groupId
    },
    include: {
      player: true
    }
  });

  const group = await prisma.group.findFirst({
    where: { id: groupId },
    include: {
      roleOrders: true
    }
  });

  if (!group) {
    throw new NotFoundError('Group not found.');
  }

  if (!memberships || memberships.length === 0) {
    throw new BadRequestError('Group has no members.');
  }

  const headers = ['Player', 'Role', 'Experience', 'Last progressed', 'Last updated'].join(',');

  const rows = sortMembers(memberships, group.roleOrders).map(membership => {
    const { role, player } = membership;

    return [
      player.displayName,
      role,
      player.exp,
      player.lastChangedAt ? dayjs(player.lastChangedAt).format('MM/DD/YYYY HH:mm:ss') : '',
      player.updatedAt ? dayjs(player.updatedAt).format('MM/DD/YYYY HH:mm:ss') : ''
    ].join(',');
  });

  return [headers, ...rows].join('\n');
}

export { fetchGroupMembersCSV };
