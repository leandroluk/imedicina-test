import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { PostService } from '@app/+core/services';
import { IObjectState, IPost } from '@app/+core/interfaces';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'page-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  public state: string;
  public post: IPost = {
    title: {},
    slug: '',
    content: {}
  };

  public froalaOptions: any = {
    placeholderText: 'Escreva seu post aqui',
    charCounterCount: false
  };

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService,
    private toast: ToasterService,
  ) {
    this.route.params.subscribe((params: { id: number }) => {
      if (!params.id) return;
      this.postService.getPost(params.id)
        .subscribe(post => {
          this.post = Object.assign(this.post, post);
        });
    });
  }

  submit() {

    if (!!this.post.id)
      this.update(this.post);
    else
      this.insert(this.post);
  }

  update(post: IPost) {
    this.postService.updatePost(post.id, post).subscribe(
      res => this.toast.pop('success', 'O post foi atualizado.'),
      err => this.toast.pop('error', err.message)
    );
  }

  insert(post: IPost) {
    this.postService.insertPost(post).subscribe(
      res => this.toast.pop('success', 'O post foi salvo com sucesso.'),
      err => this.toast.pop('error', err.message)
    );
  }

  back() {
    this.location.back();
  }
}
