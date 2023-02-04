import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  typeButton:string=""
  @Input()
  classButton:string=""
  @Input()
  nameButton:string=""
  @Output()
  event = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  send(){
    this.event.emit("clic")
  }
}
