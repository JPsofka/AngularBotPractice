import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { User } from 'src/app/interfaces/user';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons-page',
  templateUrl: './pokemons-page.component.html',
  styleUrls: ['./pokemons-page.component.scss']
})
export class PokemonsPageComponent implements OnInit, OnChanges{

  typeButtonBuy:string="button"
  classButtonBuy:string="btn btn-primary"
  nameButtonBuy:string="Buy"
  typeInput:string="text"
  classInput:string="form-control"
  placeholderInput:string="Search a pokemon"
  pokemonList:Pokemon[]=[]
  term:string=""
  srcDefault:string="https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
  @Input()
  currentUser:User={uid:"",email:"",displayName:"", photoURL:"",cash:0,pokemons:[]}
  @Input()
  login!:boolean
  photoURL:string=""
  displayName:string=""
  messageInfoUserName:string=""
  messageInfoUserCash:string=""
  cash:number=0
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getAll().subscribe((data:Pokemon[])=> this.pokemonList=data)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.currentUser.displayName !== null && this.currentUser.displayName !== undefined && this.currentUser.photoURL !== null && this.currentUser.photoURL !== undefined) {
      this.photoURL = this.currentUser.photoURL
      this.displayName=this.currentUser.displayName
      this.cash = this.currentUser.cash
      this.messageInfoUserName=` ${this.currentUser.displayName}`
      this.messageInfoUserCash=` Cash: ${this.cash}`
    }
  }

}
