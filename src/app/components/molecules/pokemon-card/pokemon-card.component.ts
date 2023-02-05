import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input()
  srcImg:string=""
  @Input()
  altImg:string=""
  @Input()
  cardTitle:string=""
  @Input()
  typeButtonBuy:string=""
  @Input()
  classButtonBuy:string=""
  @Input()
  nameButtonBuy:string=""
  @Input()
  name:string=""
  @Input()
  height:number=0
  @Input()
  weight:number=0
  @Input()
  price:number=0
  @Input()
  abilities:string[]=["s","s"]
  @Input()
  quantity:number=0
  @Input()
  isPorfile:boolean = false
  @Output()
  event = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  send(){
    this.event.emit("clic")
  }

}
