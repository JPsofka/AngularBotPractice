import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendInfoBoxComponent } from './send-info-box/send-info-box.component';
import { AtomsModule } from '../atoms/atoms.module';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';



@NgModule({
  declarations: [
    SendInfoBoxComponent,
    PokemonCardComponent
  ],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports: [
    SendInfoBoxComponent,
    PokemonCardComponent
  ]
})
export class MoleculesModule { }
