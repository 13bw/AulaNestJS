import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Get()
  helloUser() {
    return 'hello user';
  }


  @Post()
  createUser(@Body() userData: UserDto) {
    return this.userService.create(userData);
  }
}
