import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user';
import { AuthenticationService } from './services/authentication.service';
import { PokemonService } from './services/pokemon.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-cards';
  login = false
  currentUser!:User

  constructor(private aus:AuthenticationService, private userService:UserService){}
  
  account(){
    this.aus.googleSignin()
    this.aus.user.subscribe((data)=>{
      if (data) {
        this.login=true
        this.userService.get(data.uid!).subscribe((data)=>{
          this.currentUser=data!
        })
      }
    })
  }

  logout(){
    this.aus.signOut().then(()=>this.login =false)
  }

  deposit(amount:string){
    let amountToDeposit:number = +amount
    this.currentUser.cash = amountToDeposit
    // this.userService.updateUser(this.currentUser.uid, this.currentUser)
  }
}
