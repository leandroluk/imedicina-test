import { Component } from '@angular/core';
import { IPost, IObjectState } from '@app/+core/interfaces';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { PostService } from '@app/+core/services';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';

@Component({
  selector: 'page-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {

  public posts: Observable<IPost[]>;
  public selectedPost: IPost;

  public modalIsOpen: boolean = false;
  public modalIsClosing: boolean = false;

  constructor(
    private titleService: Title,
    private postService: PostService,
    private toast: ToasterService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.selectedPost = null;
    this.titleService.setTitle(this.route.snapshot.data['title']);
    this.getPosts();
  }

  public getPosts() {
    this.posts = this.postService.getPosts();
  }

  public deletePost(post: IPost) {
    this.selectedPost = post;
    document.body.classList.add('modal-open');
    this.modalIsOpen = true;
  }

  public realyDeletePost() {

    document.body.classList.remove('modal-open');
    this.modalIsOpen = false;

    this.postService.deletePost(this.selectedPost.id).subscribe(
      res => {
        this.toast.pop('success', 'O post foi atualizado.');
        this.getPosts();
        this.closeModal();
      },
      err => {
        this.toast.pop('error', err.message);
        this.closeModal();
      }
    );
  }

  public addPost() {
    this.router.navigateByUrl('/article');
  }

  public getSelectedPostTitle() {
    try {
      if (this.selectedPost !== null)
        return (this.selectedPost.title as IObjectState).rendered;
      return "";
    } catch (e) {
      console.log(e);
      return "";
    }
  }

  public closeModal() {
    this.modalIsClosing = true;
    setTimeout(() => {
      this.selectedPost = null;
      this.modalIsOpen = false;
      this.modalIsClosing = false;
    }, 200);
  }

}
