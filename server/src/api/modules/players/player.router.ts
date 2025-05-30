import { Router } from 'express';
import { z } from 'zod';
import { JobType, jobManager } from '../../../jobs';
import prisma from '../../../prisma';
import { CompetitionStatus, Metric, Period, PlayerAnnotationType } from '../../../utils';
import { NotFoundError, ServerError } from '../../errors';
import { checkAdminPermission, detectRuneLiteNameChange } from '../../util/middlewares';
import { executeRequest, validateRequest } from '../../util/routing';
import { getDateSchema, getPaginationSchema } from '../../util/validation';
import { findPlayerAchievementProgress } from '../achievements/services/FindPlayerAchievementProgressService';
import { findPlayerAchievements } from '../achievements/services/FindPlayerAchievementsService';
import { findPlayerParticipations } from '../competitions/services/FindPlayerParticipationsService';
import { findPlayerParticipationsStandings } from '../competitions/services/FindPlayerParticipationsStandingsService';
import { findPlayerParticipationsStandings2 } from '../competitions/services/FindPlayerParticipationsStandings2Service';
import { findPlayerDeltas } from '../deltas/services/FindPlayerDeltasService';
import { getPlayerEfficiencyMap } from '../efficiency/efficiency.utils';
import { findPlayerMemberships } from '../groups/services/FindPlayerMembershipsService';
import { findPlayerNameChanges } from '../name-changes/services/FindPlayerNameChangesService';
import { findPlayerRecords } from '../records/services/FindPlayerRecordsService';
import { findPlayerSnapshotTimeline } from '../snapshots/services/FindPlayerSnapshotTimelineService';
import { findPlayerSnapshots } from '../snapshots/services/FindPlayerSnapshotsService';
import { rollbackSnapshots } from '../snapshots/services/RollbackSnapshotsService';
import { rollbackCollectionLog } from '../snapshots/services/RollbackCollectionLogService';
import { formatSnapshot } from '../snapshots/snapshot.utils';
import { standardize } from './player.utils';
import { archivePlayer } from './services/ArchivePlayerService';
import { assertPlayerType } from './services/AssertPlayerTypeService';
import { changePlayerCountry } from './services/ChangePlayerCountryService';
import { deletePlayer } from './services/DeletePlayerService';
import { fetchPlayerDetails } from './services/FetchPlayerDetailsService';
import { findPlayerArchives } from './services/FindPlayerArchivesService';
import { searchPlayers } from './services/SearchPlayersService';
import { updatePlayer } from './services/UpdatePlayerService';
import { createPlayerAnnotation } from './services/CreateAnnotationService';
import { deletePlayerAnnotation } from './services/DeleteAnnotationService';

const router = Router();

router.get(
  '/players/search',
  validateRequest({
    query: z
      .object({
        username: z.string().min(1)
      })
      .merge(getPaginationSchema())
  }),
  executeRequest(async (req, res) => {
    const { username, limit, offset } = req.query;

    const result = await searchPlayers(username, { limit, offset });
    res.status(200).json(result);
  })
);

router.post(
  '/players/:username',
  detectRuneLiteNameChange,
  (req, res, next) => {
    if (req.body.force) return checkAdminPermission(req, res, next);
    next();
  },
  validateRequest({
    params: z.object({
      username: z.string()
    }),
    body: z.object({
      force: z.optional(z.boolean())
    })
  }),
  executeRequest(async (req, res) => {
    const { username } = req.params;
    const { force } = req.body;

    const { isNew } = await updatePlayer(username, force);
    const playerDetails = await fetchPlayerDetails(username);

    res.status(isNew ? 201 : 200).json(playerDetails);
  })
);

router.get(
  '/players/:username',
  validateRequest({
    params: z.object({
      username: z.string()
    })
  }),
  executeRequest(async (req, res) => {
    const { username } = req.params;

    const result = await fetchPlayerDetails(username);
    res.status(200).json(result);
  })
);

router.get(
  '/players/id/:id',
  validateRequest({
    params: z.object({
      id: z.coerce.number().int().positive()
    })
  }),
  executeRequest(async (req, res) => {
    const { id } = req.params;

    // Find the username for this player ID.
    const query = await prisma.player.findFirst({
      where: { id },
      select: { username: true }
    });

    if (!query) {
      throw new NotFoundError('Player not found.');
    }

    const result = await fetchPlayerDetails(query.username);

    res.status(200).json(result);
  })
);

router.post(
  '/players/:username/assert-type',
  validateRequest({
    params: z.object({
      username: z.string()
    })
  }),
  executeRequest(async (req, res) => {
    const { username } = req.params;

    const player = await prisma.player.findFirst({
      where: { username: standardize(username) }
    });

    if (!player) {
      throw new NotFoundError('Player not found.');
    }

    const [, updatedPlayer, changed] = await assertPlayerType(player, true);

    res.status(200).json({ player: updatedPlayer, changed });
  })
);

router.put(
  '/players/:username/country',
  checkAdminPermission,
  validateRequest({
    params: z.object({
      username: z.string()
    }),
    body: z.object({
      country: z.string().min(2).or(z.null())
    })
  }),
  executeRequest(async (req, res) => {
    const { username } = req.params;
    const { country } = req.body;

    const result = await changePlayerCountry(username, country);
    res.status(200).json(result);
  })
);

router.post(
  '/players/:username/rollback',
  checkAdminPermission,
  validateRequest({
    params: z.object({
      username: z.string()
    }),
    body: z.object({
      untilLastChange: z.optional(z.boolean())
    })
  }),
  executeRequest(async (req, res) => {
    const { username } = req.params;
    const { untilLastChange } = req.body;

    const player = await prisma.player.findFirst({
      where: { username: standardize(username) }
    });

    if (!player) {
      throw new NotFoundError('Player not found.');
    }

    await rollbackSnapshots(
      player.id,
      untilLastChange && player.lastChangedAt ? player.lastChangedAt : undefined
    );

    const { updatedPlayer } = await updatePlayer(username);

    jobManager.add(JobType.SCHEDULE_FLAGGED_PLAYER_REVIEW, {}, { delay: 5_000 });

    res.status(200).json({
      message: `Successfully rolled back player: ${updatedPlayer.displayName}`
    });
  })
);

router.post(
  '/players/:username/rollback-col-log',
  checkAdminPermission,
  validateRequest({
    params: z.object({
      username: z.string()
    })
  }),
  executeRequest(async (req, res) => {
    const { username } = req.params;

    const player = await prisma.player.findFirst({
      where: { username: standardize(username) }
    });

    if (!player) {
      throw new NotFoundError('Player not found.');
    }

    await rollbackCollectionLog(player.id, username);

    const { updatedPlayer } = await updatePlayer(username);

    jobManager.add(JobType.SCHEDULE_FLAGGED_PLAYER_REVIEW, {}, { delay: 5_000 });

    res.status(200).json({
      message: `Successfully rolled back collection logs for player: ${updatedPlayer.displayName}`
    });
  })
);

router.post(
  '/players/:username/archive',
  checkAdminPermission,
  validateRequest({
    params: z.object({
      username: z.string()
    })
  }),
  executeRequest(async (req, res) => {
    const { username } = req.params;

    const player = await prisma.player.findFirst({
      where: { username: standardize(username) }
    });

    if (!player) {
      throw new NotFoundError('Player not found.');
    }

    const { archivedPlayer } = await archivePlayer(player);

    try {
      await updatePlayer(username);
    } catch (e) {
      throw new ServerError('Failed to update new player post-archive.');
    }

    jobManager.add(JobType.SCHEDULE_FLAGGED_PLAYER_REVIEW, {}, { delay: 5_000 });

    res.status(200).json(archivedPlayer);
  })
);

router.delete(
  '/players/:username',
  checkAdminPermission,
  validateRequest({
    params: z.object({
      username: z.string()
    })
  }),
  executeRequest(async (req, res) => {
    const { username } = req.params;

    const result = await deletePlayer(username);

    res.status(200).json({
      message: `Successfully deleted player: ${result.displayName}`
    });
  })
);

router.get(
  '/players/:username/snapshots',
  validateRequest({
    params: z.object({
      username: z.string()
    }),
    query: z
      .object({
        period: z.optional(z.nativeEnum(Period).or(z.string())),
        startDate: z.optional(getDateSchema('startDate')),
        endDate: z.optional(getDateSchema('endDate'))
      })
      .merge(getPaginationSchema(200))
  }),
  executeRequest(async (req, res) => {
    const { username } = req.params;
    const { period, startDate, endDate, ...pagination } = req.query;

    const player = await prisma.player.findFirst({
      where: { username: standardize(username) }
    });

    if (!player) {
      throw new NotFoundError('Player not found.');
    }

    const results = await findPlayerSnapshots(player.id, period, startDate, endDate, pagination);

    const formattedSnapshots = results.map(s => {
      return formatSnapshot(s, getPlayerEfficiencyMap(s, player));
    });

    res.status(200).json(formattedSnapshots);
  })
);

router.get(
  '/players/:username/snapshots/timeline',
  validateRequest({
    params: z.object({
      username: z.string()
    }),
    query: z.object({
      metric: z.nativeEnum(Metric),
      period: z.optional(z.nativeEnum(Period).or(z.string())),
      startDate: z.optional(getDateSchema('startDate')),
      endDate: z.optional(getDateSchema('endDate'))
    })
  }),
  executeRequest(async (req, res) => {
    const { username } = req.params;
    const { metric, period, startDate, endDate } = req.query;

    const results = await findPlayerSnapshotTimeline(username, metric, period, startDate, endDate);
    res.status(200).json(results);
  })
);

router.get(
  '/players/:username/archives',
  validateRequest({
    params: z.object({
      username: z.string()
    })
  }),
  executeRequest(async (req, res) => {
    const { username } = req.params;

    const results = await findPlayerArchives(username);
    res.status(200).json(results);
  })
);

router.get(
  '/players/:username/groups',
  validateRequest({
    params: z.object({
      username: z.string()
    }),
    query: getPaginationSchema()
  }),
  executeRequest(async (req, res) => {
    const { username } = req.params;
    const { limit, offset } = req.query;

    const results = await findPlayerMemberships(username, { limit, offset });

    res.status(200).json(results);
  })
);

router.get(
  '/players/:username/competitions',
  validateRequest({
    params: z.object({
      username: z.string()
    }),
    query: z.object({
      status: z.optional(z.nativeEnum(CompetitionStatus))
    })
  }),
  executeRequest(async (req, res) => {
    const { username } = req.params;
    const { status } = req.query;

    const results = await findPlayerParticipations(username, status);

    res.status(200).json(results);
  })
);

router.get(
  '/players/:username/competitions/standings',
  validateRequest({
    params: z.object({
      username: z.string()
    }),
    query: z.object({
      version: z.optional(z.enum(['v1', 'v2'])),
      status: z.enum([CompetitionStatus.ONGOING, CompetitionStatus.FINISHED])
    })
  }),
  executeRequest(async (req, res) => {
    const { username } = req.params;
    const { status, version } = req.query;

    const results =
      version === 'v2'
        ? await findPlayerParticipationsStandings2(username, status)
        : await findPlayerParticipationsStandings(username, status);

    res.status(200).json(results);
  })
);

router.get(
  '/players/:username/names',
  validateRequest({
    params: z.object({
      username: z.string()
    })
  }),
  executeRequest(async (req, res) => {
    const { username } = req.params;

    const results = await findPlayerNameChanges(username);

    res.status(200).json(results);
  })
);

router.get(
  '/players/:username/gained',
  validateRequest({
    params: z.object({
      username: z.string()
    }),
    query: z.object({
      period: z.optional(z.nativeEnum(Period).or(z.string())),
      startDate: z.optional(getDateSchema('startDate')),
      endDate: z.optional(getDateSchema('endDate'))
    })
  }),
  executeRequest(async (req, res) => {
    const { username } = req.params;
    const { period, startDate, endDate } = req.query;

    const results = await findPlayerDeltas(username, period, startDate, endDate);
    res.status(200).json(results);
  })
);

router.get(
  '/players/:username/records',
  validateRequest({
    params: z.object({
      username: z.string()
    }),
    query: z.object({
      metric: z.optional(z.nativeEnum(Metric)),
      period: z.optional(z.nativeEnum(Period))
    })
  }),
  executeRequest(async (req, res) => {
    const { username } = req.params;
    const { metric, period } = req.query;

    const results = await findPlayerRecords(username, period, metric);
    res.status(200).json(results);
  })
);

router.get(
  '/players/:username/achievements',
  validateRequest({
    params: z.object({
      username: z.string()
    })
  }),
  executeRequest(async (req, res) => {
    const { username } = req.params;

    const results = await findPlayerAchievements(username);
    res.status(200).json(results);
  })
);

router.get(
  '/players/:username/achievements/progress',
  validateRequest({
    params: z.object({
      username: z.string()
    })
  }),
  executeRequest(async (req, res) => {
    const { username } = req.params;

    const results = await findPlayerAchievementProgress(username);
    res.status(200).json(results);
  })
);

router.post(
  '/players/:username/annotation',
  checkAdminPermission,
  validateRequest({
    params: z.object({
      username: z.string().min(1)
    }),
    body: z.object({
      annotationType: z.nativeEnum(PlayerAnnotationType)
    })
  }),
  executeRequest(async (req, res) => {
    const { username } = req.params;
    const { annotationType } = req.body;

    const createdAnnotation = await createPlayerAnnotation(username, annotationType);

    res.status(201).json(createdAnnotation);
  })
);

router.delete(
  '/players/:username/annotation',
  checkAdminPermission,
  validateRequest({
    params: z.object({
      username: z.string().min(1)
    }),
    body: z.object({
      annotationType: z.nativeEnum(PlayerAnnotationType)
    })
  }),
  executeRequest(async (req, res) => {
    const { username } = req.params;
    const { annotationType } = req.body;

    const deletedAnnotation = await deletePlayerAnnotation(username, annotationType);

    res.status(200).json(`Annotation ${deletedAnnotation.type} deleted for player ${username}`);
  })
);

export default router;
