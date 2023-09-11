import { Injectable } from '@nestjs/common';
import { Posts } from './interfaces/posts.interface';

@Injectable()
export class PostsService {
  private readonly posts: Posts[] = [];

  findAll(): Posts[] {
    return this.posts;
  }

  findPost(): Posts[] {
    const postItem = this.posts.find((post: Posts) => post.id === '1');
    return [postItem];
  }
}
