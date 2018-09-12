import { NgModule } from '@angular/core';
import { StoreModule as NxStoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';

import { UserReducer } from './usuario.store';

@NgModule({
  imports: [
    CommonModule,
    NxStoreModule.forRoot({
      user: UserReducer
    })
  ],
  declarations: []
})
export class StoreModule {
  static forRoot() {
    return { ngModule: StoreModule };
  }
}