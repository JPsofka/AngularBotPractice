import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input()
  type:string=""
  @Input()
  class:string=""
  @Input()
  placeholder:string=""
  value:string=""

  constructor() { }

  ngOnInit(): void {
    console.log(this.value)
  }

}
