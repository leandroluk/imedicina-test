import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';
import { Observable, of, Subject } from 'rxjs';

import { IUserJwt } from '@core/interfaces/user-jwt.interface';
import { CacheService } from '@app/+core/cache.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _localStorageNameToken = '__WordPress__iMedicina';
  private baseUrl;
  public headers: any;

  private _authState: Observable<IUserJwt>;
  public get authState(): Observable<IUserJwt> {
    return this._authState = of(JSON.parse(localStorage.getItem(this._localStorageNameToken)) as IUserJwt);
  }

  constructor(private http: HttpClient, private cache: CacheService) {
    this.baseUrl = environment['apiHost'] + '/wp-json';
  }

  public entrar(username: string, password: string): Observable<IUserJwt> {
    return this.http
      .post(`${this.baseUrl}/jwt-auth/v1/token`, { username, password })
      .pipe((res) => {
        res.subscribe(
          (data: IUserJwt) => {
            localStorage.setItem(this._localStorageNameToken, JSON.stringify(data));
            this.headers = {
              'Authorization': data.token,
              'Access-Control-Allow-Origin': '*'
            }
          },
          err => localStorage.setItem(this._localStorageNameToken, '')
        );
        return res;
      });
  }

}
