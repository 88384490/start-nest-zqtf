import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { HttpCode } from '../app.interface';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('findAll')
  findAll(@Res() res: Response) {
    const result = this.userService.findAllUsers();
    console.log(result);
    res.status(HttpStatus.OK).json({
      code: HttpCode.success,
      data: result,
      msg: 'sucess',
    });
  }
}
