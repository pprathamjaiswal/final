import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    SharedModuleRoutingModule
  ]
})
export class SharedModuleModule { }
