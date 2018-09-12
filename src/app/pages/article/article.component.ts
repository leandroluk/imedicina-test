import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '@app/+core/interfaces/post.interface';
import { PostService, UserService } from '@app/+core/services';
import { IObjectState, IAppStore, IUser } from '@app/+core/interfaces';
import { slug } from '@app/+core/functions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'page-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  private user: IUser;
  public post: IPost = {
    guid: {},
    title: {},
    content: {},
    excerpt: {},
    _links: {}
  };

  public state: string;

  public froalaOptions: any = {
    placeholderText: 'Escreva seu post aqui',
    charCounterCount: false
  };

  constructor(
    private route: ActivatedRoute,
    private store: Store<IAppStore>,
    private postService: PostService,
    private userService: UserService,
  ) {
    this.route.params.subscribe((params: { id: number }) => {
      if (!params.id) return;
      this.postService.getPost(params.id)
        .subscribe(post => this.post = Object.assign(this.post, post));
    });
  }

  submit() {
    let post: IPost = Object.assign({}, this.post);

    if (!!post.guid) post.guid = (post.guid as IObjectState).rendered;
    if (!!post.title) post.title = (post.title as IObjectState).rendered;
    if (!!post.content) post.content = (post.content as IObjectState).rendered;
    if (!!post.excerpt) post.excerpt = (post.excerpt as IObjectState).rendered;
    if (!!post.slug) post.slug = slug(post.title);

    if (!!post.id) this.update(post);
    else this.insert(post);
  }

  update(post: IPost) {
    this.postService.updatePost(post.id, post).subscribe(
      res => console.log(res),
      err => console.log('err', err)
    );
  }

  insert(post: IPost) {
    this.postService.insertPost(post).subscribe(res => {
      console.log(res);
    });
  }
}
