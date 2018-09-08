import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';
import { IUserJwt } from '@app/core/interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl;

  constructor(private http: HttpClient) {
    this.baseUrl = environment['apiHost'] + '/wp-json';
  }

  public auth(username: string, password: string): Observable<IUserJwt> {
    return this.http.post(`${this.baseUrl}/jwt-auth/v1/token`, { username, password })
  }

}
