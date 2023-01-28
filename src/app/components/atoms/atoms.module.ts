import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../organisms/navbar/navbar.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    InputComponent
  ]
})
export class AtomsModule { }
