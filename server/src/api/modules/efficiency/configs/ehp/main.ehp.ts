import { Skill } from '../../../../../utils';

export default [
  {
    skill: Skill.ATTACK,
    methods: [
      {
        startExp: 0,
        rate: 15_000,
        description: 'Bonus XP from Slayer'
      },
      {
        startExp: 37_224,
        rate: 38_000,
        description: 'Bonus XP from Slayer'
      },
      {
        startExp: 100_000,
        rate: 55_000,
        description: 'Bonus XP from Slayer'
      },
      {
        startExp: 1_000_000,
        rate: 65_000,
        description: 'Bonus XP from Slayer'
      },
      {
        startExp: 1_210_421,
        rate: 315_000,
        description: 'Bonus XP from Slayer'
      },
      {
        startExp: 13_034_431,
        rate: 490_000,
        description: 'Bonus XP from Slayer'
      }
    ],
    bonuses: []
  },
  {
    skill: Skill.DEFENCE,
    methods: [
      {
        startExp: 0,
        rate: 420_000,
        description: "Chinning in Kruk's Dungeon"
      }
    ],
    bonuses: [
      {
        originSkill: Skill.DEFENCE,
        bonusSkill: Skill.RANGED,
        startExp: 0,
        endExp: 200_000_000,
        end: false,
        ratio: 1.25
      },
      {
        originSkill: Skill.DEFENCE,
        bonusSkill: Skill.PRAYER,
        startExp: 0,
        endExp: 200_000_000,
        end: false,
        ratio: 0.154
      }
    ]
  },
  {
    skill: Skill.STRENGTH,
    methods: [
      {
        startExp: 0,
        rate: 15_000,
        description: 'Quests'
      },
      {
        startExp: 37_224,
        rate: 38_000,
        description: 'Bonus XP from Slayer'
      },
      {
        startExp: 61_512,
        rate: 145_000,
        description: 'Bonus XP from Slayer'
      },
      {
        startExp: 449_428,
        rate: 245_000,
        description: 'Bonus XP from Slayer'
      },
      {
        startExp: 1_986_068,
        rate: 300_000,
        description: 'Bonus XP from Slayer'
      },
      {
        startExp: 6_517_253,
        rate: 335_000,
        description: 'Bonus XP from Slayer'
      },
      {
        startExp: 13_034_431,
        rate: 400_000,
        description: 'Bonus XP from Slayer'
      }
    ],
    bonuses: []
  },
  {
    skill: Skill.RANGED,
    methods: [
      {
        startExp: 0,
        rate: 250_000,
        description: 'Bonus XP from Slayer'
      },
      {
        startExp: 6_517_253,
        rate: 330_000,
        description: 'Bonus XP from Slayer'
      },
      {
        startExp: 13_034_431,
        rate: 1_190_000,
        description: 'Chinning maniacal monkeys'
      }
    ],
    bonuses: []
  },
  {
    skill: Skill.PRAYER,
    methods: [
      {
        startExp: 0,
        rate: 1_670_000,
        description: 'Dagannoth bones at the chaos altar'
      },
      {
        startExp: 737_627,
        rate: 2_000_000,
        description: 'Superior dragon bones at the chaos altar'
      }
    ],
    bonuses: []
  },
  {
    skill: Skill.COOKING,
    methods: [
      {
        startExp: 0,
        rate: 171_000,
        description: '1t poison karambwan'
      },
      {
        startExp: 13_363,
        rate: 513_800,
        description: '1t karambwan'
      },
      {
        startExp: 37_224,
        rate: 585_600,
        description: '1t karambwan'
      },
      {
        startExp: 101_333,
        rate: 656_800,
        description: '1t karambwan'
      },
      {
        startExp: 273_742,
        rate: 728_200,
        description: '1t karambwan'
      },
      {
        startExp: 737_627,
        rate: 799_800,
        description: '1t karambwan'
      },
      {
        startExp: 1_986_068,
        rate: 871_400,
        description: '1t karambwan'
      },
      {
        startExp: 5_346_332,
        rate: 938_400,
        description: '1t karambwan'
      },
      {
        startExp: 13_034_431,
        rate: 970_000,
        description: '1t karambwan'
      }
    ],
    bonuses: []
  },
  {
    skill: Skill.WOODCUTTING,
    methods: [
      {
        startExp: 0,
        rate: 29_000,
        description: 'Quests and trees'
      },
      {
        startExp: 2_411,
        rate: 56_000,
        description: '2t oaks (average rate)'
      },
      {
        startExp: 22_406,
        rate: 93_174,
        description: '1.5t teaks'
      },
      {
        startExp: 41_171,
        rate: 114_728,
        description: '1.5t teaks'
      },
      {
        startExp: 111_945,
        rate: 127_339,
        description: '1.5t teaks'
      },
      {
        startExp: 302_288,
        rate: 172_507,
        description: '1.5t teaks'
      },
      {
        startExp: 814_445,
        rate: 194_022,
        description: '1.5t teaks'
      },
      {
        startExp: 1_986_068,
        rate: 207_636,
        description: '1.5t teaks'
      },
      {
        startExp: 5_346_332,
        rate: 221_977,
        description: '1.5t teaks'
      },
      {
        startExp: 13_034_431,
        rate: 235_000,
        description: '1.5t teaks'
      }
    ],
    bonuses: []
  },
  {
    skill: Skill.FISHING,
    methods: [
      {
        startExp: 0,
        rate: 29_200,
        description: 'Quests'
      },
      {
        startExp: 14_612,
        rate: 46_592,
        description: '3t fly fishing'
      },
      {
        startExp: 75_127,
        rate: 81_612,
        description: 'Drift net fishing (65.2k hunter & 55.9k fishing xp/h)'
      },
      {
        startExp: 106_046,
        rate: 94_314,
        description: 'Drift net fishing (81.6k hunter & 64.6k fishing xp/h)'
      },
      {
        startExp: 229_685,
        rate: 108_780,
        description: 'Drift net fishing (95.1k hunter & 72.2k fishing xp/h)'
      },
      {
        startExp: 302_288,
        rate: 123_432,
        description: 'Drift net fishing (108.7k hunter & 80.3k fishing xp/h)'
      },
      {
        startExp: 593_234,
        rate: 134_256,
        description: 'Drift net fishing (118.5k hunter & 87.2k fishing xp/h)'
      },
      {
        startExp: 737_627,
        rate: 132_800,
        description: 'Drift net fishing (118.5k hunter & 89.9k fishing xp/h) and 2t swordfish & tuna'
      }
    ],
    bonuses: []
  },
  {
    skill: Skill.FIREMAKING,
    methods: [
      {
        startExp: 0,
        rate: 73_700,
        description: 'Colored logs'
      },
      {
        startExp: 22_406,
        rate: 138_900,
        description: 'Teak logs'
      },
      {
        startExp: 45_529,
        rate: 184_250,
        description: 'Arctic pine logs'
      },
      {
        startExp: 61_512,
        rate: 198_990,
        description: 'Maple logs'
      },
      {
        startExp: 101_333,
        rate: 414_079,
        description: 'Artefacts with firemaking (163.6k thieving & 139.5k firemaking xp/h)'
      },
      {
        startExp: 273_742,
        rate: 565_154,
        description: 'Artefacts with firemaking (194.6k thieving & 179.4k firemaking xp/h)'
      },
      {
        startExp: 1_210_421,
        rate: 795_098,
        description: 'Artefacts with firemaking (224.8k thieving & 269.1k firemaking xp/h)'
      },
      {
        startExp: 5_346_332,
        rate: 894_364,
        description: 'Artefacts with firemaking (246.8k thieving & 310k firemaking xp/h)'
      },
      {
        startExp: 13_034_431,
        rate: 794_566,
        realRate: 310_000,
        description:
          'Artefacts with firemaking (260k thieving & 310k firemaking xp/h), scales to firebwan (505k firemaking & 353.5k cooking xp/h)'
      }
    ],
    bonuses: [
      {
        originSkill: Skill.FIREMAKING,
        bonusSkill: Skill.THIEVING,
        startExp: 13_034_431,
        endExp: 200_000_000,
        end: true,
        ratio: 0.8387
      }
    ]
  },
  {
    skill: Skill.CRAFTING,
    methods: [
      {
        startExp: 0,
        rate: 57_000,
        description: 'Leather items'
      },
      {
        startExp: 4_470,
        rate: 139_000,
        description: 'Sapphires'
      },
      {
        startExp: 9_730,
        rate: 187_650,
        description: 'Emeralds'
      },
      {
        startExp: 20_224,
        rate: 236_300,
        description: 'Rubies'
      },
      {
        startExp: 50_339,
        rate: 298_850,
        description: 'Diamonds'
      },
      {
        startExp: 368_599,
        rate: 324_420,
        description: "Green d'hide bodies"
      },
      {
        startExp: 814_445,
        rate: 366_280,
        description: "Blue d'hide bodies"
      },
      {
        startExp: 1_475_581,
        rate: 408_140,
        description: "Red d'hide bodies"
      },
      {
        startExp: 2_951_373,
        rate: 450_000,
        description: "Black d'hide bodies"
      }
    ],
    bonuses: []
  },
  {
    skill: Skill.SMITHING,
    methods: [
      {
        startExp: 0,
        rate: 46_500,
        description: 'Quests'
      },
      {
        startExp: 37_224,
        rate: 380_000,
        description: 'Blast Furnace gold'
      },
      {
        startExp: 13_034_431,
        rate: 410_000,
        description: 'Blast Furnace gold'
      }
    ],
    bonuses: []
  },
  {
    skill: Skill.MINING,
    methods: [
      {
        startExp: 0,
        rate: 20_000,
        description: 'Quests'
      },
      {
        startExp: 35_025,
        rate: 45_300,
        description: 'Motherlode Mine for the prospector kit and Shooting Stars for the celestial ring'
      },
      {
        startExp: 489_936,
        rate: 102_516,
        description: '3t granite'
      },
      {
        startExp: 1_210_421,
        rate: 108_510,
        description: '3t granite'
      },
      {
        startExp: 3_258_594,
        rate: 113_459,
        description: '3t granite'
      },
      {
        startExp: 8_771_558,
        rate: 117_782,
        description: '3t granite'
      },
      {
        startExp: 13_034_431,
        rate: 125_000,
        description: '3t granite'
      }
    ],
    bonuses: [
      {
        originSkill: Skill.MINING,
        bonusSkill: Skill.SMITHING,
        startExp: 489_936,
        endExp: 200_000_000,
        end: true,
        ratio: 0.08
      }
    ]
  },
  {
    skill: Skill.HERBLORE,
    methods: [
      {
        startExp: 0,
        rate: 11_100,
        description: 'Quests'
      },
      {
        startExp: 8_025,
        rate: 218_750,
        description: "Serum 207's"
      },
      {
        startExp: 123_660,
        rate: 293_750,
        description: 'Super energies'
      },
      {
        startExp: 166_636,
        rate: 312_500,
        description: 'Super strengths'
      },
      {
        startExp: 368_599,
        rate: 356_250,
        description: 'Super restores'
      },
      {
        startExp: 496_254,
        rate: 375_000,
        description: 'Super defences'
      },
      {
        startExp: 668_051,
        rate: 393_750,
        description: 'Antifire potions'
      },
      {
        startExp: 899_257,
        rate: 406_250,
        description: 'Ranging potions'
      },
      {
        startExp: 1_336_443,
        rate: 431_250,
        description: 'Magic potions'
      },
      {
        startExp: 1_475_581,
        rate: 535_500,
        description: '1t stamina potions'
      },
      {
        startExp: 2_951_373,
        rate: 577_500,
        description: '1t extended antifires'
      },
      {
        startExp: 3_972_294,
        rate: 630_000,
        description: '1t anti-venoms'
      },
      {
        startExp: 11_805_606,
        rate: 840_000,
        description: '1t extended super antifires'
      }
    ],
    bonuses: []
  },
  {
    skill: Skill.AGILITY,
    methods: [
      {
        startExp: 0,
        rate: 15_100,
        description: 'Quests'
      },
      {
        startExp: 75_127,
        rate: 35_000,
        description: 'Wilderness Agility Course'
      },
      {
        startExp: 123_660,
        rate: 45_000,
        description: 'Hallowed Sepulchre'
      },
      {
        startExp: 333_804,
        rate: 56_250,
        description: 'Hallowed Sepulchre'
      },
      {
        startExp: 899_257,
        rate: 66_667,
        description: 'Hallowed Sepulchre'
      },
      {
        startExp: 2_421_087,
        rate: 76_000,
        description: 'Hallowed Sepulchre'
      },
      {
        startExp: 6_517_253,
        rate: 98_950,
        description: 'Hallowed Sepulchre with grand coffin looting (98.5k xp/h) and making potions'
      }
    ],
    bonuses: [
      {
        originSkill: Skill.AGILITY,
        bonusSkill: Skill.HERBLORE,
        startExp: 6_517_253,
        endExp: 200_000_000,
        end: true,
        ratio: 0.5858
      }
    ]
  },
  {
    skill: Skill.THIEVING,
    methods: [
      {
        startExp: 0,
        rate: 15_000,
        description: 'Quests, fruit stalls'
      },
      {
        startExp: 61_512,
        rate: 80_000,
        description: 'Blackjacking'
      },
      {
        startExp: 91_721,
        rate: 246_655,
        description: 'Artefacts with firemaking (163.6k thieving & 139.5k firemaking xp/h)'
      },
      {
        startExp: 293_865,
        rate: 285_024,
        description: 'Artefacts with firemaking (194.6k thieving & 179.4k firemaking xp/h)'
      },
      {
        startExp: 1_309_988,
        rate: 339_767,
        description: 'Artefacts with firemaking (224.8k thieving & 269.1k firemaking xp/h)'
      },
      {
        startExp: 4_765_013,
        rate: 377_739,
        description: 'Artefacts with firemaking (246.8k thieving & 310k firemaking xp/h)'
      },
      {
        startExp: 10_885_948,
        rate: 363_882,
        description: 'Artefacts with ancient brews (255.6k thieving & 250k herblore xp/h)'
      },
      {
        startExp: 13_034_431,
        rate: 370_169,
        description: 'Artefacts with ancient brews after 200m firemaking (260k thieving & 250k herblore xp/h)'
      }
    ],
    bonuses: []
  },
  {
    skill: Skill.SLAYER,
    methods: [
      {
        startExp: 0,
        rate: 5_000,
        description: 'Efficient slayer'
      },
      {
        startExp: 37_224,
        rate: 12_000,
        description: 'Efficient Slayer'
      },
      {
        startExp: 101_333,
        rate: 40_000,
        description: 'Efficient Slayer'
      },
      {
        startExp: 449_428,
        rate: 74_250,
        description: 'Efficient Slayer'
      },
      {
        startExp: 1_986_068,
        rate: 79_000,
        description: 'Efficient Slayer'
      },
      {
        startExp: 3_258_594,
        rate: 86_500,
        description: 'Efficient Slayer'
      },
      {
        startExp: 5_346_332,
        rate: 87_000,
        description: 'Efficient Slayer'
      },
      {
        startExp: 7_195_629,
        rate: 93_000,
        description: 'Efficient Slayer'
      },
      {
        startExp: 13_034_431,
        rate: 102_300,
        description: 'Efficient Slayer'
      }
    ],
    bonuses: [
      {
        originSkill: Skill.SLAYER,
        bonusSkill: Skill.ATTACK,
        startExp: 0,
        endExp: 200_000_000,
        end: false,
        ratio: 1
      },
      {
        originSkill: Skill.SLAYER,
        bonusSkill: Skill.STRENGTH,
        startExp: 0,
        endExp: 200_000_000,
        end: false,
        ratio: 1
      },
      {
        originSkill: Skill.SLAYER,
        bonusSkill: Skill.DEFENCE,
        startExp: 0,
        endExp: 200_000_000,
        end: false,
        ratio: 0.493
      },
      {
        originSkill: Skill.SLAYER,
        bonusSkill: Skill.RANGED,
        startExp: 0,
        endExp: 1_986_068,
        end: false,
        ratio: 0.3299
      },
      {
        originSkill: Skill.SLAYER,
        bonusSkill: Skill.RANGED,
        startExp: 1_986_068,
        endExp: 3_258_594,
        end: false,
        ratio: 0.2494
      },
      {
        originSkill: Skill.SLAYER,
        bonusSkill: Skill.RANGED,
        startExp: 3_258_594,
        endExp: 5_346_332,
        end: false,
        ratio: 0.1896
      },
      {
        originSkill: Skill.SLAYER,
        bonusSkill: Skill.RANGED,
        startExp: 5_346_332,
        endExp: 7_195_629,
        end: false,
        ratio: 0.174
      },
      {
        originSkill: Skill.SLAYER,
        bonusSkill: Skill.RANGED,
        startExp: 7_195_629,
        endExp: 13_034_431,
        end: false,
        ratio: 0.1521
      },
      {
        originSkill: Skill.SLAYER,
        bonusSkill: Skill.RANGED,
        startExp: 13_034_431,
        endExp: 200_000_000,
        end: false,
        ratio: 0.11
      },
      {
        originSkill: Skill.SLAYER,
        bonusSkill: Skill.PRAYER,
        startExp: 0,
        endExp: 1_986_068,
        end: false,
        ratio: 0.0673
      },
      {
        originSkill: Skill.SLAYER,
        bonusSkill: Skill.PRAYER,
        startExp: 1_986_068,
        endExp: 3_258_594,
        end: false,
        ratio: 0.0824
      },
      {
        originSkill: Skill.SLAYER,
        bonusSkill: Skill.PRAYER,
        startExp: 3_258_594,
        endExp: 5_346_332,
        end: false,
        ratio: 0.11917
      },
      {
        originSkill: Skill.SLAYER,
        bonusSkill: Skill.PRAYER,
        startExp: 5_346_332,
        endExp: 7_195_629,
        end: false,
        ratio: 0.21689
      },
      {
        originSkill: Skill.SLAYER,
        bonusSkill: Skill.PRAYER,
        startExp: 7_195_629,
        endExp: 13_034_431,
        end: false,
        ratio: 0.18914
      },
      {
        originSkill: Skill.SLAYER,
        bonusSkill: Skill.PRAYER,
        startExp: 13_034_431,
        endExp: 200_000_000,
        end: false,
        ratio: 0.21605
      }
    ]
  },
  {
    skill: Skill.FARMING,
    methods: [
      {
        startExp: 0,
        rate: 16_000,
        description: 'Quests'
      },
      {
        startExp: 32_500,
        rate: 285_000,
        description: 'Tree runs'
      },
      {
        startExp: 61_512,
        rate: 491_000,
        description: 'Tree runs'
      },
      {
        startExp: 166_636,
        rate: 679_000,
        description: 'Tree runs'
      },
      {
        startExp: 273_742,
        rate: 1_052_000,
        description: 'Tree runs'
      },
      {
        startExp: 605_032,
        rate: 1_338_000,
        description: 'Tree runs'
      },
      {
        startExp: 1_210_421,
        rate: 1_884_000,
        description: 'Tree runs'
      },
      {
        startExp: 2_192_818,
        rate: 2_309_000,
        description: 'Tree runs'
      },
      {
        startExp: 3_258_594,
        rate: 2_474_000,
        description: 'Tree runs'
      },
      {
        startExp: 5_346_332,
        rate: 2_500_000,
        description: 'Tree runs'
      }
    ],
    bonuses: []
  },
  {
    skill: Skill.RUNECRAFTING,
    methods: [
      {
        startExp: 0,
        rate: 13_600,
        description: 'Quests'
      },
      {
        startExp: 33_210,
        rate: 280_000,
        description: '0+4 lava runes'
      }
    ],
    bonuses: []
  },
  {
    skill: Skill.HUNTER,
    methods: [
      {
        startExp: 0,
        rate: 30_000,
        description: 'Varrock museum and birdhouses'
      },
      {
        startExp: 2_107,
        rate: 83_000,
        description: 'Oak birdhouses'
      },
      {
        startExp: 7_028,
        rate: 110_000,
        description: 'Willow birdhouses'
      },
      {
        startExp: 20_224,
        rate: 138_000,
        description: 'Teak birdhouses'
      },
      {
        startExp: 55_649,
        rate: 161_000,
        description: 'Drift net fishing (65.2k hunter & 55.9k fishing xp/h)'
      },
      {
        startExp: 91_721,
        rate: 207_303,
        description: 'Drift net fishing (81.6k hunter & 64.6k fishing xp/h)'
      },
      {
        startExp: 24_886,
        rate: 282_663,
        description: 'Drift net fishing (95.1k hunter & 72.2k fishing xp/h)'
      },
      {
        startExp: 343_551,
        rate: 310_720,
        description: 'Drift net fishing (108.7k hunter & 80.3k fishing xp/h)'
      },
      {
        startExp: 737_627,
        rate: 337_966,
        description: 'Drift net fishing (118.5k hunter & 87.2k fishing xp/h)'
      },
      {
        startExp: 933_979,
        rate: 265_000,
        realRate: 118_535,
        description: 'Drift net fishing (118.5k hunter & 89.9k fishing xp/h), scales to black chinchompas'
      }
    ],
    bonuses: [
      {
        originSkill: Skill.HUNTER,
        bonusSkill: Skill.FISHING,
        startExp: 933_979,
        endExp: 200_000_000,
        maxBonus: 32_414_530,
        end: true,
        ratio: 0.75862069443
      }
    ]
  },
  {
    skill: Skill.CONSTRUCTION,
    methods: [
      {
        startExp: 0,
        rate: 54_700,
        description: 'Low-level furniture'
      },
      {
        startExp: 18_247,
        rate: 450_000,
        description: 'Oak larders'
      },
      {
        startExp: 123_660,
        rate: 950_000,
        description: 'Mahogany tables'
      },
      {
        startExp: 1_475_581,
        rate: 1_050_000,
        description: 'Mahogany benches'
      }
    ],
    bonuses: []
  }
];
