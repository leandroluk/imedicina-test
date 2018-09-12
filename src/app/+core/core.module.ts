import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '@app/+core/pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule
  ],
  exports: [
    FormsModule,
    PipesModule
  ]
})
export class CoreModule { }
