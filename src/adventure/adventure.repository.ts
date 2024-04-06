import { Injectable } from '@nestjs/common';
import prisma from '../../prisma/context';
import { Adventure } from '@prisma/client';

@Injectable()
export class AdventureRepository {
  async createAdventure(difficulty: number, userId: number): Promise<Adventure> {
    const adventure = prisma.adventure.create({
      data: {
        difficulty: difficulty,
        userId: userId,
      },
    });

    return await adventure;
  }

  async getById(adventureId: number): Promise<Adventure> {
    const adventure = prisma.adventure.findUnique({
      where: {
        id: adventureId
      }
    })

    return await adventure;
  }
}
