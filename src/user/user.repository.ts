import { Injectable } from '@nestjs/common';
import prisma from '../../prisma/context';

@Injectable()
export class UserRepository {
  async createUser(uuid: string): Promise<number> {
    const user = prisma.user.create({
      data: {
        uuid: uuid,
      },
    });

    return (await user).id;
  }
}
