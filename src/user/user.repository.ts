import { Injectable } from '@nestjs/common';
import prisma from '../../prisma/context';
import { User } from '@prisma/client';

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

  async findUser(userUuid: string): Promise<number> {
    const user = prisma.user.findUnique({
      where: { uuid: userUuid },
    })

    if (!user) throw new Error('User not found');
    return (await (user)).id;
  }
}
