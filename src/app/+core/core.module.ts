import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '@core/auth.service';
import { CacheService } from '@app/+core/cache.service';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [AuthService, CacheService],
  declarations: [OrderByPipe],
  exports: [OrderByPipe]
})
export class CoreModule { }
