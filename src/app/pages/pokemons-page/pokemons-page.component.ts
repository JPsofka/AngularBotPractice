import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons-page',
  templateUrl: './pokemons-page.component.html',
  styleUrls: ['./pokemons-page.component.scss']
})
export class PokemonsPageComponent implements OnInit {

  typeButtonBuy:string="button"
  classButtonBuy:string="btn btn-primary"
  nameButtonBuy:string="Buy"
  pokemonList:Pokemon[]=[]
  
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAll().subscribe((data:Pokemon[])=>this.pokemonList=data)
    console.log(this.pokemonList)
  }

}
