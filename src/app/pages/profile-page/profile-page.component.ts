import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  typeButtonSend:string="button"
  classButtonSend:string="btn btn-sencondary"
  nameButtonSend:string="sendButton"
  currentUser:User={uid:"",email:"",displayName:"", photoURL:"",cash:0,pokemons:[]}
  term:string=""
  isProfile:boolean = true

  constructor(private aus:AuthenticationService, private userService:UserService) { }

  ngOnInit(): void {
    this.aus.user.subscribe((data) => {
      if (data !== undefined && data !== null) {
        this.currentUser = data
      }
    })
  }

}
