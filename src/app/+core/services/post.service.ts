import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '@env/environment';
import { UserService } from './user.service';
import { IPost, IHttpHeaders, IEnviroment } from '@core/interfaces';
import { debug } from 'util';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private get headers(): { headers: IHttpHeaders } {
    return { headers: this.user.headers };
  };
  private get baseUrl(): string {
    return (environment as IEnviroment).apiHost + '/wp-json/wp/v2/posts';
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
    return this.http.post(`${this.baseUrl}`, {
      date: Date.now,
      date_gmt: Date.now,
      slug: 'asdsada',
      status: 'publish',
      password: null,
      title: 'Loren Ipsum',
      content: 'this is a test',
      author: 1,
      excerpt: {},
      comment_status: 'open',
      format: 'standard',
      meta: [],
      sticky: false,
      template: '',
      categories: [],
      tags: [],
      liveblog_likes: 0
    }, this.headers);
  }

  public updatePost(id: number, post: IPost): Observable<any> {
    debugger;
    let data = {
      date: post.date,
      date_gmt: post.date_gmt,
      slug: post.slug,
      status: post.status,
      password: null,
      title: post.title,
      content: post.content,
      author: post.author,
      excerpt: post.excerpt,
      comment_status: post.comment_status,
      format: post.format,
      meta: [].concat(post.meta),
      sticky: post.sticky,
      template: '' + post.template,
      categories: [].concat(post.categories),
      tags: [].concat(post.tags),
      liveblog_likes: !!post.liveblog_likes ? post.liveblog_likes : 0
    }
    console.log(data);
    return this.http.post(`${this.baseUrl}/${id}`, data, this.headers);
  }

}
