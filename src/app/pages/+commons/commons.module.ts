import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer';
import { NavbarComponent } from './navbar';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent
  ]
})
export class CommonsModule { }
