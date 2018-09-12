import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as icons from './icon';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...Object.values(icons)],
  exports: [...Object.values(icons)]
})
export class UiModule { }
