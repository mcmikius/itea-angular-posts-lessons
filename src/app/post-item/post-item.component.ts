import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';
import IPost from '../interfaces/post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: IPost;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

}
