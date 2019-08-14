import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import IPost from '../interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: IPost;
  constructor(private postService: PostService) { }

  ngOnInit() {

  }

}
