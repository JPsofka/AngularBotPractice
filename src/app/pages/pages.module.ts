import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsPageComponent } from './pokemons-page/pokemons-page.component';
import { AtomsModule } from '../components/atoms/atoms.module';
import { OrganismsModule } from '../components/organisms/organisms.module';
import { MoleculesModule } from '../components/molecules/molecules.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProfilePageComponent } from './profile-page/profile-page.component';



@NgModule({
  declarations: [
    PokemonsPageComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    AtomsModule,
    OrganismsModule,
    MoleculesModule
  ],
  exports: [
    PokemonsPageComponent,
    ProfilePageComponent
  ]
})
export class PagesModule { }
