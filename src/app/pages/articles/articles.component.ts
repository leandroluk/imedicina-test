import { Component } from '@angular/core';
import { IPost } from '@app/+core/interfaces';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { PostService } from '@app/+core/services';
import { ActivatedRoute } from '@angular/router';

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
    
  }

}
