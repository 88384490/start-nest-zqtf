import { Injectable } from '@nestjs/common';
import { User, RoleEnum } from '../user.interface';

interface IUserService {
  createUser: () => boolean;
  findUserByOne: () => User | null;
  findAllUsers: () => User[];
}

@Injectable()
export class UserService {
  private userList: User[] = [
    {
      id: '1',
      name: '冬',
      role: RoleEnum.NORMAL,
    },
  ];

  createUser(user: User): boolean {
    this.userList.push(user);
    return true;
  }

  findUserByOne(id: string): User {
    return this.userList.find((item) => item.id === id);
  }

  findAllUsers(): User[] {
    return this.userList;
  }
}
