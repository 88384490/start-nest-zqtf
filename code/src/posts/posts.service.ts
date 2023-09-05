import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  private readonly posts: any[] = [];

  findAll(): any[] {
    return this.posts;
  }
}
