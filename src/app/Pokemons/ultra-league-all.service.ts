import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UltraLeagueAllService {

  ultraLeaguePokemonArray = [{
    name: 'Bulbasaur',
    hp: 120,
    atk:111,
    def: 100,
    numberOfMOves: 6,
    type: 'grass',
    type2: 'poison',
    moves: ['Petal Blizzard','Sludge Bomb','Solar Beam','Frenzy Plant','Frustration','Return'],
  },
    {
      name: 'Ivysaur',
      hp: 199,
      atk:188,
      def: 122,
      numberOfMOves: 6,
      type: 'grass',
      type2: 'poison',
      moves: ['Petal Blizzard','Sludge Bomb','Solar Beam','Frenzy Plant','Frustration','Return'],
    },
    {
      name: 'Venusaur',
      hp: 1189,
      atk:124,
      def: 300,
      numberOfMOves: 6,
      type: 'grass',
      type2: 'poison',
      moves: ['Petal Blizzard','Sludge Bomb','Solar Beam','Frenzy Plant','Frustration','Return'],

    }
  ]



  constructor() { }
}
