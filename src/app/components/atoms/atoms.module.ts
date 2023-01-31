import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../organisms/navbar/navbar.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';
import { AvatarComponent } from './avatar/avatar.component';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    AvatarComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    AvatarComponent,
    MessageComponent
  ]
})
export class AtomsModule { }
