import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IconAngleLeftComponent,
  IconBarsComponent,
  IconCaretComponent,
  IconEyeComponent,
  IconMinusComponent,
  IconPencilComponent,
  IconPlusComponent,
  IconSaveComponent,
} from './icon';

export const ICONS = [
  IconAngleLeftComponent,
  IconBarsComponent,
  IconCaretComponent,
  IconEyeComponent,
  IconMinusComponent,
  IconPencilComponent,
  IconPlusComponent,
  IconSaveComponent,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...ICONS],
  exports: [...ICONS]
})
export class UiModule { }
