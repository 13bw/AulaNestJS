import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  private users: UserDto[] = [];
  
  create(userData: UserDto) {
    this.users.push(userData);
    return this.users;
  }

  findByName(name: string) {
    return this.users.filter(user => user.name == name);
  }

  findAll() {
    return this.users;
  }
  
  delete( name: string) {
    this.users = this.users.filter(user => user.name != name);
    return this.users;
  }
}
