import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title:string="Deposit"
  type:string="text"
  class:string="form-control"
  placeholder:string="Please insert the amount to deposit"
  typeButtonSend:string ="submit"
  classButtonSend:string="btn btn-primary"
  nameButtonSend:string="Deposit"
  typeButtonCancel:string="button"
  classButtonCancel:string="btn btn-secondary"
  nameButtonCancel:string="Cancel"
  @Output()
  event = new EventEmitter<string>()
  @Output()
  eventLogout = new EventEmitter<string>()
  @Input()
  login:boolean=false

  ngOnInit(): void {
  }
  account(){
    this.event.emit("clic")
  }

  logout(){
    this.eventLogout.emit("clic")
  }
    

}
