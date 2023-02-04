import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title: string = "Deposit"
  type: string = "text"
  class: string = "form-control"
  placeholder: string = "Please insert the amount to deposit"
  typeButtonSend: string = "submit"
  classButtonSend: string = "btn btn-primary"
  nameButtonSend: string = "Deposit"
  typeButtonCancel: string = "button"
  classButtonCancel: string = "btn btn-secondary"
  nameButtonCancel: string = "Cancel"
  @Input()
  login: boolean = false
  @Input()
  currentUser!: User
  @Output()
  event = new EventEmitter<string>()
  @Output()
  eventLogout = new EventEmitter<string>()


  constructor(private userService: UserService) { }
  ngOnInit(): void {
  }
  account() {
    this.event.emit("clic")
  }

  logout() {
    this.eventLogout.emit("clic")
  }

  emitInfo(item: string) {
    let user:User = this.currentUser 
    if (user !== null && user !== undefined) {
      if (user.dateOfLastDeposit !== undefined) {
        let dateNow = Date.now()
        console.log(user.dateOfLastDeposit)
        if (dateNow >= (user.dateOfLastDeposit + 86400000)) {
          console.log("if por fecha")
          user.cash = +item
          user.dateOfLastDeposit = new Date().getTime()
          this.userService.updateUser(user.uid, user)
        }
        console.log("segundo if fuera")
        if ((user.cash + (+item)) <= 200) {
          console.log("segundo if dentro")
          user.cash = user.cash + (+item)
          user.dateOfLastDeposit = new Date().getTime()
          this.userService.updateUser(user.uid, user)
        }

      } else {
        user.cash = +item
        user.dateOfLastDeposit = new Date().getTime()
        this.userService.updateUser(this.currentUser.uid, this.currentUser)
      }
    }
  }
}
