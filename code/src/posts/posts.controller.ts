import { Controller, Get, Response, HttpStatus, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postService: PostsService);

  @Get('findAll')
  findAll(@Response() res): Promise<any> {
    try {
      const result = this.postService.findAll();
      return res.status(HttpStatus.OK).json({
        code: 200,
        data: result,
        msg: 'success',
      });
    } catch (e: any) {}
  }

  @Get('findPost')
  findPost(@Param('id') id: string, @Param('name') name: string): Promise<any> {
    return res.status(HttpStatus.OK).json({});
  }
}
