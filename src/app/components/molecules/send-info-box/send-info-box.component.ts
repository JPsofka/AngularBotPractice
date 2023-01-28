import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-info-box',
  templateUrl: './send-info-box.component.html',
  styleUrls: ['./send-info-box.component.scss']
})
export class SendInfoBoxComponent implements OnInit {

  @Input()
  title:string=""
  @Input()
  type:string = ""
  @Input()
  class:string = ""
  @Input()
  placeholder:string = ""
  @Input()
  actionName:string=""
  @Input()
  classButtonModal:string=""
  @Input()
  typeButtonSend:string=""
  @Input()
  classButtonSend:string=""
  @Input()
  nameButtonSend:string=""
  @Input()
  typeButtonCancel:string=""
  @Input()
  classButtonCancel:string=""
  @Input()
  nameButtonCancel:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
