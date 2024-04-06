import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/user.response';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUserUuid(): Promise<CreateUserDto> {
    const uuid = crypto.randomUUID();

    await this.userRepository.createUser(uuid);

    const userDto = new CreateUserDto();
    userDto.uuid = uuid;
    return userDto;
  }
}
