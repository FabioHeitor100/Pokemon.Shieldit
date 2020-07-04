import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenIService {

  pokemonsgenIV = [{
    name: 'Swampert',
    hp: 139,
    atk:121.1,
    def: 110,
    type: 'water',
    type2: 'ground',
  },

    {
      name: 'Venusaur',
      hp: 123,
      atk:121.2,
      def: 123,
      numberOfMOves: 6,
      type: 'grass',
      type2: 'poison',
      moves : ['Petal Blizzard','Sludge Bomb','Solar Beam','Frenzy Plant','Frustration','Return'],
    }];

  constructor() { }
}
