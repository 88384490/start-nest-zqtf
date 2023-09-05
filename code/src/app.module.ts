import { Module } from '@nestjs/common';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

@Module({
  imports: [PostsModule, UserModule],
  controllers: [PostsController, UserController],
  providers: [UserService],
})
export class AppModule {}
