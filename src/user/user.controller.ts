import { Controller, Get, Param, Post, Req } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.response';

@ApiTags('UserController')
@Controller('/api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '유저 uuid 생성 및 조회' })
  @Post('')
  async createUserUuid(): Promise<CreateUserDto> {
    return await this.userService.createUserUuid();
  }
}
