import {Injectable} from '@angular/core';
import IPost from './interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() {
  }

  getPosts(): Promise<IPost[]> {
    return fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(response => response.json())
      .then(posts => posts.map(post => {
        return {
          userId: post.userId,
          id: post.id,
          title: post.title,
          body: post.body
        };
      }));
  }

  getPost(id: number): Promise<IPost> {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(post => {
        return {
          userId: post.userId,
          id: post.id,
          title: post.title,
          body: post.body
        };
      });
  }
}
