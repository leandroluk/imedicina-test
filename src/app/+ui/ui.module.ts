import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconCaretComponent } from '@ui/icon/icon-caret.component';
import { IconBarsComponent } from '@ui/icon/icon-bars.component';
import { IconEyeComponent } from '@app/+ui/icon/icon-eye.component';
import { IconPencilComponent } from '@app/+ui/icon/icon-pencil.component';
import { IconMinusComponent } from '@app/+ui/icon/icon-minus.component';
import { IconSaveComponent } from '@app/+ui/icon/icon-save.component';

const ICONS = [
  IconCaretComponent,
  IconBarsComponent,
  IconEyeComponent,
  IconPencilComponent,
  IconMinusComponent,
  IconSaveComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...ICONS],
  exports: [...ICONS]
})
export class UiModule { }
