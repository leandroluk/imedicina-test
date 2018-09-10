import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '@app/+core/interfaces/post.interface';
import { PostService } from '@app/+core/post.service';

@Component({
  selector: 'page-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  public post: IPost;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {
    this.route.params.subscribe((params: { id: number }) => {
      if (!params.id) return;
      this.postService.getPost(params.id).subscribe(post => this.post = post);
    });
  }

}
