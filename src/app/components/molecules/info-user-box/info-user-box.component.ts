import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-user-box',
  templateUrl: './info-user-box.component.html',
  styleUrls: ['./info-user-box.component.scss']
})
export class InfoUserBoxComponent implements OnInit {

  @Input()
  src:string=""
  @Input()
  alt:string=""
  @Input()
  messageInfoUserName:string=""
  @Input()
  messageInfoUserCash:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
