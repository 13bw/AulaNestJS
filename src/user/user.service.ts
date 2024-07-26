import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {

  create(userData: UserDto) {
    return userData;
  }
}
