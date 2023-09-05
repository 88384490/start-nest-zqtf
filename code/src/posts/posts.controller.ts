import { Controller, Get, Response, HttpStatus } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get('findAll')
  findAll(@Response() res): Promise<any> {
    return res.status(HttpStatus.OK).json({
      code: 200,
      data: {},
      msg: 'success',
    });
  }
}
