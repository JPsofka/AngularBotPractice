import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsPageComponent } from './pokemons-page/pokemons-page.component';
import { AtomsModule } from '../components/atoms/atoms.module';
import { OrganismsModule } from '../components/organisms/organisms.module';
import { MoleculesModule } from '../components/molecules/molecules.module';



@NgModule({
  declarations: [
    PokemonsPageComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    OrganismsModule,
    MoleculesModule
  ],
  exports: [
    PokemonsPageComponent
  ]
})
export class PagesModule { }
