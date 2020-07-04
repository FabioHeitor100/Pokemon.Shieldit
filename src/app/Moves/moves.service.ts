import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovesService {

  moves = [

    {
      name: 'Origin Pulse',
      power: 130,
      type: 'water',
    },


    {

      name: 'Precipice Blades',
      power: 130,
      type: 'ground',
    },

    {
      name:'Megahorn',
      power: 110,
      type: 'bug',

    },
    {
      name:'Return',
      power: 35,
      type: 'normal',

    },
    {
      name:'Aura Sphere',
      power: 90,
      type: 'fighting',

    },
    {
      name:'Flying Press',
      power: 110,
      type: 'fighting',

    },
    {
      name:'Hydro Cannon',
      power: 90,
      type: 'water',

    },

    {
      name:'Sacred Sword',
      power: 55,
      type: 'fighting',

    },
    {
      name:'Brave Bird',
      power: 90,
      type: 'flying',

    },
    {
      name:'Crabhamemr',
      power: 85,
      type: 'water',

    },
    {
      name:'Future Sight',
      power: 120,
      type: 'psychick',

    },
    {
      name:'Stone Edge',
      power: 100,
      type: 'rock',

    },
    {
      name:'Close Combat',
      power: 100,
      type: 'water',

    },
    {
      name:'Giga Impact',
      power: 200,
      type: 'normal',

    },
    {
      name:'Petal Blizzard',
      power: 110,
      type: 'grass',

    },
    {
      name:'Blizzard',
      power: 130,
      type: 'ice',

    },
    {
      name:'Gunk Shot',
      power: 130,
      type: 'poison',

    },
    {
      name:'Skull Bash',
      power: 130,
      type: 'normal',

    },
    {
      name:'Thunder',
      power: 100,
      type: 'electric',

    },

    {
      name:'Draco Meteor',
      power: 150,
      type: 'dragon',

    },

    {
      name:'Doom Desire',
      power: 70,
      type: 'steel',

    },

    {
      name:'Hurricane',
      power: 110,
      type: 'flying',

    },

    {
      name:'Focus Blast',
      power: 140,
      type: 'fighting',

    },

    {
      name:'Sky Attack',
      power: 80,
      type: 'flying',

    },

    {
      name:'Overheat',
      power: 160,
      type: 'fire',

    },
    {
      name:'Hyper Beam',
      power: 150,
      type: 'normal',

    },
    {
      name:'Hydro Pump',
      power: 130,
      type: 'water',

    },
    {
      name:'Earthquake',
      power: 140,
      type: 'ground',

    },

    {
      name:'frenzy Plant',
      power: 100,
      type: 'grass',

    },
    {
      name:'Meteor Mash',
      power: 100,
      type: 'steel',

    },
    {
      name:'Surf',
      power: 65,
      type: 'water',

    },
    {
      name:'Zap Cannon ',
      power: 140,
      type: 'electric',

    },
    {
      name:'Weather Ball Fire',
      power: 60,
      type: 'fire',

    },
    {
      name:'Weather Ball Ice',
      power: 60,
      type: 'ice',

    },
    {
      name:'Weather Ball Normal',
      power: 60,
      type: 'normal',

    },
    {
      name:'Weather Ball Water',
      power: 60,
      type: 'water',

    },
    {
      name:'Blaze Kick',
      power: 45,
      type: 'fire',

    },
    {
      name:'Flash Cannon',
      power: 100,
      type: 'steel',

    },
    {
      name:'Solar Beam',
      power: 180,
      type: 'grass',

    },
    {
      name:'Foul Play',
      power: 70,
      type: 'dark',

    },
    {
      name:'Sludge Bomb',
      power: 80,
      type: 'poison',

    },
    {
      name:'Power Whip',
      power: 90,
      type: 'grass',

    },
    {
      name:'Wild Charge',
      power: 90,
      type: 'electric',

    },
    {
      name:'Grass Knot',
      power: 90,
      type: 'grass',

    },
    {
      name:'Sludge Wave',
      power: 110,
      type: 'poison',

    },
    {
      name:'Cross Chop',
      power:50,
      type: 'fighting',

    },
    {
      name:'Shadow Ball',
      power: 100,
      type: 'ghost',

    },
    {
      name:'MoonBlast',
      power: 130,
      type: 'fairy',

    },
    {
      name:'Fire Blast',
      power: 140,
      type: 'fire',

    },

    {
      name:'Dynamic Punch',
      power: 90,
      type: 'fighting',

    },
    {
      name:'Avalanche',
      power: 90,
      type: 'ice',

    },

    {
      name:'Heavy Slam',
      power: 70,
      type: 'steel',

    },
    {
      name:'Blast Burn',
      power: 110,
      type: 'fire',

    },
    {
      name:'Stomp',
      power: 55,
      type: 'normal',

    },
    {
      name:'psychic',
      power: 90,
      type: 'psychic',

    },
    {
      name:'Thunderbolt',
      power: 80,
      type: 'eletric',

    },
    {
      name:'Hyper Fang',
      power: 80,
      type: 'normal',

    },
    {
      name:'Flamethrower',
      power: 70,
      type: 'fire',

    },
    {
      name:'Heat Wave',
      power: 95,
      type: 'fire',

    },
    {
      name:'Iron Head',
      power: 60,
      type: 'steel',

    },
    {
      name:'Play Rough',
      power: 90,
      type: 'fairy',

    },
    {
      name:'Last Resort',
      power: 90,
      type: 'normal',

    },

    {
      name:'Synchronoise',
      power: 80,
      type: 'psychic',

    },
    {
      name:'Rock Wrecker',
      power: 110,
      type: 'rock',

    },
    {
      name:'Rock Slide',
      power: 80,
      type: 'rock',

    },
    {
      name:'Dragon Claw',
      power: 50,
      type: 'dragon',

    },
    {
      name:'Leaf Blade',
      power: 70,
      type: 'grass',

    },
    {
      name:'Drill Run',
      power: 80,
      type: 'ground',

    },
    {
      name:'Dazzling Gleam',
      power: 100,
      type: 'fairy',

    },
    {
      name:'SuperPower',
      power: 85,
      type: 'fighting',

    },
    {
      name:'Outrage',
      power: '110',
      type: 'dragon',

    },

    {
      name:'X-Scissor',
      power: 45,
      type: 'grass',

    },
    {
      name:'Earth Power',
      power: 100,
      type: 'ground',

    },
    {
      name:'Power Gem',
      power: 80,
      type: 'rock',

    },

    {
      name:'Ice Beam',
      power: 90,
      type: 'ice',

    },
    {
      name:'Submission',
      power: 60,
      type: 'fighting',

    },
    {
      name:'Flame Burst',
      power: 70,
      type: 'fire',

    },
    {
      name:'Dark Pulse',
      power: 80,
      type: 'dark',

    },
    {
      name:'Cross Poison',
      power: 40,
      type: 'poison',

    },
    {
      name:'Ice Punch',
      power: 50,
      type: 'ice',

    },
    {
      name:'Aqua Tail',
      power: 50,
      type: 'water',

    },
    {
      name:'Body Slam',
      power: 50,
      type: 'normal',

    },
    {
      name:'Seed Bomb',
      power: 55,
      type: 'grass',

    },
    {
      name:'Drill Peck',
      power: 60,
      type: 'flying',

    },
    {
      name:'Brine',
      power: 60,
      type: 'water',

    },
    {
      name:'Disharge',
      power: 65,
      type: 'electric',

    },
    {
      name:'Signal Beam',
      power: 75,
      type: 'bug',

    },
    {
      name:'Magnet Bomb',
      power: 70,
      type: 'steel',

    },
    {
      name:'Thunder Punch',
      power: 45,
      type: 'electric',

    },
    {
      name:'Dragon Pulse',
      power: 90,
      type: 'dragon',

    },


    {
      name:'Bone Club',
      power: 40,
      type: 'ground',

    },
    {
      name:'Fire Punch',
      power: 55,
      type: 'fire',

    },
    {
      name:'Brick Break',
      power: 40,
      type: 'fighting',

    },
    {
      name:'Power-up Punch',
      power: 50,
      type: 'fighing',

    },
    {
      name:'Bug Buzz',
      power: 90,
      type: 'grass',

    },
    {
      name:'Gyra Ball',
      power: 80,
      type: 'steel',

    },
    {
      name:'Pyshock',
      power: 65,
      type: 'psychic',

    },
    {
      name:'Mud Bomb',
      power: 55,
      type: 'ground',

    },
    {
      name:'Sludge',
      power: 50,
      type: 'poison',

    },
    {
      name:'Rock Blast',
      power: 50,
      type: 'rock',

    },
    {
      name:'Bubble Beam',
      power: 45,
      type: 'water',

    },

    {
      name:'Shadow Punch',
      power: 40,
      type: 'ghost',

    },

    {
      name:'Draining Kiss',
      power: 60,
      type: 'fairy',

    },
    {
      name:'Night Shade',
      power: 60,
      type: 'ghost',

    },
    {
      name:'Energy Ball',
      power: 90,
      type: 'grass',

    },
    {
      name:'Mirror Coat',
      power: 60,
      type: 'psychick',

    },
    {
      name:'Aerial Ace',
      power: 55,
      type: 'flying',

    },
    {
      name:'Bulldoze',
      power: 80,
      type: 'ground',

    },
    {
      name:'Night Slash',
      power: 50,
      type: 'dark',

    },
    {
      name:'Fell Stinger',
      power: 50,
      type: 'bug',

    },
    {
      name:'Muddy Water',
      power: 50,
      type: 'water',

    },
    {
      name:'Aurora Beam',
      power: 80,
      type: 'ice',

    },

    {
      name:'FLame Wheel',
      power: 60,
      type: 'water',

    },
    {
      name:'Air Cutter',
      power: 60,
      type: 'flying',

    },
    {
      name:'Psybeam',
      power: 70,
      type: 'psychic',

    },
    {
      name:'Rock Tomb',
      power: 70,
      type: 'rock',

    },
    {
      name:'Water Pulse',
      power: 70,
      type: 'water',

    },
    {
      name:'Crunch',
      power: 70,
      type: 'dark',

    },
    {
      name:'Ominous Wind',
      power: 50,
      type: 'ghost',

    },
    {
      name:'Octazooka',
      power: 50,
      type: 'water',

    },
    {
      name:'Scald',
      power: 80,
      type: 'water',

    },
    {
      name:'Horn Attack',
      power: 40,
      type: 'normal',

    },
    {
      name:'Swift',
      power: 60,
      type: 'normal',

    },
    {
      name:'Dig',
      power: 100,
      type: 'ground',

    },
    {
      name:'Low Sweep',
      power: 40,
      type: 'fighting',

    },
    {
      name:'Mirror Shot',
      power: 50,
      type: 'steel',

    },
    {
      name:'Wrap',
      power: 60,
      type: 'normal',

    },
    {
      name:'Poison Fang',
      power: 35,
      type: 'poison',

    },
    {
      name:'Ancient Power',
      power: 70,
      type: 'rock',

    },
    {
      name:'Silver Wind',
      power: 70,
      type: 'bug',

    },
    {
      name:'Vise Grip',
      power: 35,
      type: 'normal',

    },
    {
      name:'FLame Charge',
      power: 70,
      type: 'fire',

    },
    {
      name:'Icy Wind',
      power: 60,
      type: 'ice',

    },
    {
      name:'Disarming Voice',
      power: 70,
      type: 'fairy',

    },
    {
      name:'Psycho Boost',
      power: 70,
      type: 'psychic',

    },
    {
      name:'Aqual Jet',
      power: 60,
      type: 'water',

    },
    {
      name:'Shadow Sneak',
      power: 50,
      type: 'ghost',

    },
    {
      name:'Twister',
      power: 45,
      type: 'dragon',

    },
    {
      name:'Struggle',
      power: 35,
      type: 'normal',

    },
    {
      name:'Sand tomb',
      power: 60,
      type: 'ground',

    },
    {
      name:'Leaf Tornado',
      power: 45,
      type: 'grass',

    },
    {
      name:'Acid Spray',
      power: 20,
      type: 'poison',

    },
    {
      name:'Frustration',
      power: 10,
      type: 'normal',

    },
    {
      name:'Transform',
      power: 0,
      type: 'normal',

    },
    {
      name:'Lunge',
      power: 0,
      type: 'bug',

    },
    {
      name:'Crush Claw',
      power: 0,
      type: 'normal',

    },
    {
      name:'Leech Life',
      power: 0,
      type: 'bug',

    },
    {
      name:'Drain Punch',
      power: 0,
      type: 'fighting',

    },
    {
      name:'Shadow Bone',
      power: 0,
      type: 'ghost',

    },
    {
      name:'Razor Shell',
      power: 0,
      type: 'water',

    },
    {
      name:'Horn Drill',
      power: 0,
      type: 'normal',

    },
    {
      name:'Fissure',
      power: 0,
      type: 'ground',

    },





































































































































  ];

  constructor() { }
}
