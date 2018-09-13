import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserService } from './user.service';
import { IPost, IHttpHeaders } from '@core/interfaces';
import { Observable } from 'rxjs';
import { BASE_URL } from '../..';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private get headers(): { headers: IHttpHeaders } {
    return { headers: this.user.headers };
  };
  private get baseUrl(): string {
    return BASE_URL + '/wp/v2/posts';
  };

  constructor(
    private user: UserService,
    private http: HttpClient
  ) { }

  public getPosts() {
    return this.http.get<IPost[]>(this.baseUrl, this.headers);
  }

  public getPost(id: number) {
    return this.http.get<IPost>(`${this.baseUrl}/${id}`, this.headers);
  }

  public insertPost(post: IPost): Observable<any> {

    post = {
      title: post.title,
      status: 'publish',
      content: post.content,
      excerpt: post.excerpt,
      author: 1
    }

    return this.http.post(`${this.baseUrl}`, post, this.headers);
  }

  public updatePost(id: number, post: IPost): Observable<any> {

    post = {
      id: post.id,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt
    }

    return this.http.post(`${this.baseUrl}/${id}`, post, this.headers);

  }

  public deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, this.headers);
  }

}
