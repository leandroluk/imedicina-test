import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IUser, IHttpHeaders, IAppStore } from '@core/interfaces';
import { CONST_CACHE_NAME } from '@core/contants';
import { Store } from '@ngrx/store';
import { UserOnline } from '@app/+core/store';
import { BASE_URL } from '../..';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private get baseUrl(): string {
    return BASE_URL;
  }

  public get headers(): IHttpHeaders {
    if (this.user) {
      return {
        'Authorization': `Bearer ${this.user.token}`
      };
    }
    return {};
  }

  private _user: IUser;

  public get user(): IUser {
    this._user = JSON.parse(localStorage.getItem(CONST_CACHE_NAME)) as IUser;
    return this._user;
  }
  public set user(v: IUser) {
    this._user = v;
    localStorage.setItem(CONST_CACHE_NAME, JSON.stringify(v));
  }

  constructor(
    private http: HttpClient,
    private store: Store<IAppStore>
  ) { }

  public getUser(login: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}/wp/v2/users?slug=${login}`, this.headers);
  }

  public postLogin(username: string, password: string): Observable<IUser> {
    return this.http
      .post<IUser>(`${this.baseUrl}/jwt-auth/v1/token`, { username, password })
      .pipe((res) => {
        res.subscribe(
          (user: IUser) => {
            this.user = user;
            this.store.dispatch(new UserOnline(this.user));
            /*this.getUser(user.user_nicename).subscribe(userComplete => {
              this.user = Object.assign({ btoa: btoa(username + ':' + password) }, user, userComplete[0]);
              this.store.dispatch(new UserOnline(this.user));
            })*/
          },
          (err) => this.user = {});
        return res;
      });
  }

}
