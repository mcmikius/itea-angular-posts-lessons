import {Component, OnInit} from '@angular/core';
import IPost from '../interfaces/post';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: IPost[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.getPosts().then(r => this.posts = r);
  }

}
