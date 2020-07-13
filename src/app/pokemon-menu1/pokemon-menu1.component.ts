import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PokemonListService} from "../Pokemons/pokemon-list.service";
import _ from 'lodash';



@Component({
  selector: 'app-pokemon-menu1',
  templateUrl: './pokemon-menu1.component.html',
  styleUrls: ['./pokemon-menu1.component.scss'],
})
export class PokemonMenu1Component implements OnInit {

  @Output() teste11 : EventEmitter<any> = new EventEmitter<any>();
  @Output() pokemonId: EventEmitter<any> = new EventEmitter<any>();
  @Output() pokemonName: EventEmitter<any> = new EventEmitter<any>();

  pokemonListName = this.pokemonListServicee.pokemonList;
  pokemonListId=this.pokemonListName.map((x,index)=>({id:index,name:x}));
  allPokemon;


  constructor(private pokemonListServicee: PokemonListService) {  this.allPokemon = this.pokemonListId}

    ngOnInit() {}

     pokemonFilter(pokemon){
    let val = pokemon.target.value;
    if (val && val.trim() != ''){
    this.pokemonListId =_.values(this.allPokemon);
    this.pokemonListId = this.pokemonListId.filter((pokemon) => {
        return (pokemon.name.toLowerCase().indexOf(val.toLowerCase()) > -1 );
    });
    }
    else {
        this.pokemonListId = this.allPokemon;
    }
    }

    sendPokemonInfo1(pokemonId,pokemonName){
      console.log("pokemon ID Menu:", pokemonId);
      console.log("Pokemon Name Menu:",pokemonName);
      this.pokemonId.emit(pokemonId);
      this.pokemonName.emit(pokemonName);
    }


    changeBGColor(id){


for(let pokemon of this.pokemonListId){
  document.getElementById(pokemon.id.toString()).style.border = " 1px solid #222428";


}





     document.getElementById(id).style.border = " 1px solid white";
    }

}
