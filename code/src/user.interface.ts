export enum RoleEnum {
  ADMIN = 'admin',
  GUEST = 'guest',
  NORMAL = 'normal',
}

export interface User {
  id: string;
  name: string;
  role: string;
}
