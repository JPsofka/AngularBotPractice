import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendInfoBoxComponent } from './send-info-box/send-info-box.component';
import { AtomsModule } from '../atoms/atoms.module';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { InfoUserBoxComponent } from './info-user-box/info-user-box.component';



@NgModule({
  declarations: [
    SendInfoBoxComponent,
    PokemonCardComponent,
    InfoUserBoxComponent
  ],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports: [
    SendInfoBoxComponent,
    PokemonCardComponent,
    InfoUserBoxComponent
  ]
})
export class MoleculesModule { }
