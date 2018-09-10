import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '@env/environment';
import { AuthService } from '@core/auth.service';
import { IPost } from '@core/interfaces/post.interface';
import { IHttpHeaders } from '@core/interfaces/http-headers.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private headers: { headers: IHttpHeaders };
  private baseUrl: string;

  constructor(
    private auth: AuthService,
    private http: HttpClient
  ) {
    this.baseUrl = environment['apiHost'] + '/wp-json/wp/v2/posts';
    this.headers = { headers: this.auth.headers };
  }

  public getPosts() {
    return this.http.get<IPost[]>(this.baseUrl, this.headers);
  }

  public getPost(id: number) {
    return this.http.get<IPost>(`${this.baseUrl}/${id}`, this.headers);
  }

}
