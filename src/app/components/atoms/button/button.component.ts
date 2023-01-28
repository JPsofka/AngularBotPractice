import { Component, Input, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
