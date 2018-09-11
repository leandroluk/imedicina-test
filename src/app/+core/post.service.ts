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

  public insertPost(post: IPost) {
    return this.http.post(this.baseUrl, post, this.headers);
  }

  public updatePost(id: number, p: IPost) {
    
    let n = {
      data: p.date,
      date_gmt: p.date_gmt,
      slug: p.slug,
      status: p.slug,
      title: p.title,
      content: p.content,
      author: p.author,
      comment_status: p.comment_status,
    };

    return this.http.post(`${this.baseUrl}/${id}`, n, this.headers);
  }

}
