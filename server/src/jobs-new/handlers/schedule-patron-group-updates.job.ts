import prometheusService from '../../api/services/external/prometheus.service';
import prisma from '../../prisma';
import { Period, PeriodProps } from '../../utils';
import { Job } from '../job.class';
import { JobType } from '../types/job-type.enum';

export class SchedulePatronGroupUpdatesJob extends Job<unknown> {
  async execute() {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    const patronGroupIds = await prisma.patron
      .findMany({
        where: { groupId: { not: null } },
        select: { groupId: true }
      })
      .then(res => res.map(p => p.groupId).filter(Boolean));

    const dayAgo = new Date(Date.now() - PeriodProps[Period.DAY].milliseconds);

    const outdatedPatronMembers = await prisma.membership.findMany({
      where: {
        groupId: { in: patronGroupIds },
        player: {
          OR: [{ updatedAt: { lt: dayAgo } }, { updatedAt: null }]
        }
      },
      include: {
        player: { select: { username: true } }
      }
    });

    // Execute the update action for every member
    outdatedPatronMembers.forEach(({ player: { username } }) => {
      this.jobManager.add(JobType.UPDATE_PLAYER, { username });
      prometheusService.trackUpdatePlayerJobSource('schedule-patron-group-updates-job');
    });
  }
}
