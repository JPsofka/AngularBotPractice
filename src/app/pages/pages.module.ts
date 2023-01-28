import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsPageComponent } from './pokemons-page/pokemons-page.component';
import { AtomsModule } from '../components/atoms/atoms.module';



@NgModule({
  declarations: [
    PokemonsPageComponent
  ],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports: [
    PokemonsPageComponent
  ]
})
export class PagesModule { }
