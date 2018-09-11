import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';
import { Observable, of } from 'rxjs';

import { IUser } from '@core/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _localStorageNameToken = '__WordPress__iMedicina';
  private baseUrl;
  public headers: any;

  private _authState: Observable<IUser>;
  public get authState(): Observable<IUser> {
    return this._authState = of(JSON.parse(localStorage.getItem(this._localStorageNameToken)) as IUser);
  }

  constructor(private http: HttpClient) {
    this.baseUrl = environment['apiHost'] + '/wp-json';
  }

  public getUser(username: string) {
    return this.http.get<IUser>(`${this.baseUrl}/wp/v2/users?slug=${username}`, this.headers)
  }

  public entrar(username: string, password: string): Observable<IUser> {
    return this.http
      .post(`${this.baseUrl}/jwt-auth/v1/token`, { username, password })
      .pipe((res) => {
        res.subscribe(
          (user: IUser) => {

            this.headers = { 'Authorization': user.token, 'Access-Control-Allow-Origin': '*' }

            this.getUser(user.user_nicename).subscribe(userComplete => {
              user = Object.assign(user, userComplete[0]);
              localStorage.setItem(this._localStorageNameToken, JSON.stringify(user));
            });

          },
          err => localStorage.setItem(this._localStorageNameToken, '')
        );
        return res;
      });
  }

}
