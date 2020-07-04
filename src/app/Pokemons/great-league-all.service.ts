import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreatLeagueAllService {

  greatLeaguePokemonArray = [{
    name: 'Bulbasaur',
    hp: 113,
    atk:105.1,
    def: 99.5,
    numberOfMOves: 4,
    type: 'grass',
    type2: 'poison',
    moves: ['Seed Bomb','Power Whip','Return','Sludge Bomb'],
  },
    {
      name: 'Ivysaur',
      hp: 132,
      atk:118,
      def: 121.9,
      numberOfMOves: 4,
      type: 'grass',
      type2: 'poison',
       moves: ['Solar Beam','Power Whip','Return','Sludge Bomb'],
    },
    {
      name: 'Venusaur',
      hp: 123,
      atk:121.2,
      def: 123,
      numberOfMOves: 6,
      type: 'grass',
      type2: 'poison',
      moves: ['Petal Blizzard','Sludge Bomb','Solar Beam','Frenzy Plant','Frustration','Return'],

    }
  ];





  constructor() { }
}
