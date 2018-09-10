import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '@app/+core/post.service';
import { IPost } from '@app/+core/interfaces/post.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {

  public posts: Observable<IPost[]>;

  constructor(
    private titleService: Title,
    private postService: PostService,
    private router: ActivatedRoute
  ) {
    this.titleService.setTitle(this.router.snapshot.data['title']);
    this.posts = this.postService.getPosts();
  }

  public deletePost(id: number) {
    console.log(id);
  }

}
