import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import _ from 'lodash';
import {PokemonListService} from "../Pokemons/pokemon-list.service";
@Component({
  selector: 'app-pokemon-menu2',
  templateUrl: './pokemon-menu2.component.html',
  styleUrls: ['./pokemon-menu2.component.scss'],
})
export class PokemonMenu2Component implements OnInit {

  @Output() teste11 : EventEmitter<any> = new EventEmitter<any>();
  @Output() pokemonId: EventEmitter<any> = new EventEmitter<any>();
  @Output() pokemonName: EventEmitter<any> = new EventEmitter<any>();


  pokemonListName = this.pokemonListServicee.pokemonList;
  pokemonListId=this.pokemonListName.map((x,index)=>({id:index,name:x}))
  allPokemon;

  constructor(private pokemonListServicee: PokemonListService) {  this.allPokemon = this.pokemonListId}

  ngOnInit() {}

  pokemonFilter(pokemon){
    let val = pokemon.target.value;
    if (val && val.trim() != ''){
      this.pokemonListId =_.values(this.allPokemon);
      this.pokemonListId = this.pokemonListId.filter((pokemon) => {
        return (pokemon.name.toLowerCase().indexOf(val.toLowerCase()) > -1 );
      })
    } else {
      this.pokemonListId = this.allPokemon;
    }
  }

  sendPokemonInfo2(pokemonId,pokemonName){
    console.log("pokemon ID Menu2:", pokemonId);
    console.log("Pokemon Name Menu2:",pokemonName);
    this.pokemonId.emit(pokemonId);
    this.pokemonName.emit(pokemonName);
  }
}






