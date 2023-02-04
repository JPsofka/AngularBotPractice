import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { User } from 'src/app/interfaces/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PokemonService } from 'src/app/services/pokemon.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pokemons-page',
  templateUrl: './pokemons-page.component.html',
  styleUrls: ['./pokemons-page.component.scss']
})
export class PokemonsPageComponent implements OnInit{

  typeButtonBuy:string="submit"
  classButtonBuy:string="btn btn-primary"
  nameButtonBuy:string="Buy"
  typeInput:string="text"
  classInput:string="form-control"
  placeholderInput:string="Search a pokemon"
  pokemonList:Pokemon[]=[]
  term:string=""
  srcDefault:string="https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
  currentUser:User={uid:"",email:"",displayName:"", photoURL:"",cash:0,pokemons:[]}
  login:boolean = false
  photoURL:string=""
  displayName:string=""
  messageInfoUserName:string=""
  messageInfoUserCash:string=""
  cash:number=0
  constructor(private pokemonService: PokemonService, private aus:AuthenticationService, private userService:UserService) { }

  ngOnInit(): void {
    this.pokemonService.getAll().subscribe((data:Pokemon[])=> this.pokemonList=data)
    this.aus.user.subscribe((data)=>{
      if (data !== undefined && data!== null) {
        this.currentUser = data
        this.login = true
        this.messageInfoUserName = this.currentUser.displayName!
        this.messageInfoUserCash = `Cash: ${this.currentUser.cash.toString()}`
      }
      if (data === undefined || data=== null) {
        this.login = false
      }
    })
  }

  

  

}
