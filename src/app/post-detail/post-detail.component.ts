import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../post.service';
import IPost from '../interfaces/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: IPost;

  constructor(private route: ActivatedRoute, private postService: PostService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.getItem(+params.get('postId')));
  }

  getItem(id: number) {
    this.postService.getPost(id).then(r => this.post = r);
  }
}
