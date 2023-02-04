import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MoleculesModule,
    FormsModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class OrganismsModule { }
