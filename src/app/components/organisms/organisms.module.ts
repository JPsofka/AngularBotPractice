import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MoleculesModule } from '../molecules/molecules.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MoleculesModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class OrganismsModule { }
