import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import IPost from '../interfaces/post';
import {PostItemComponent} from '../post-item/post-item.component';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: IPost[] = [];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.getPosts().then((response) => {
      this.posts = response;
    });
  }

}
