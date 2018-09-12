import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Store, select } from "@ngrx/store";
import { IAppStore, IUser } from '@core/interfaces';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private user: Observable<IUser>;

  constructor(
    public router: Router,
    public store: Store<IAppStore>
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.store
      .pipe(select('user'))
      .pipe(obs => {
        obs.subscribe(user => {
          if (user === null) this.router.navigateByUrl('/login');
          return true;
        });
        return of(true);
      });
  }
}
