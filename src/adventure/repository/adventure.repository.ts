import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import prisma from '../../../prisma/context';
import { Adventure } from '@prisma/client';

@Injectable()
export class AdventureRepository {
  async createAdventure(difficulty: number, userId: number): Promise<Adventure> {
    const adventure = prisma.adventure.create({
      data: {
        difficulty: difficulty,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return await adventure;
  }

  async getById(adventureId: number): Promise<Adventure> {
    const adventure = prisma.adventure.findUnique({
      where: {
        id: adventureId,
      },
    });

    if (!adventure) {
      throw new HttpException('Adventure not found', HttpStatus.NOT_FOUND);
    }
    return await adventure;
  }

  async getByUserId(userId: number): Promise<Adventure[]> {
    const adventures = prisma.adventure.findMany({
      where: {
        userId: userId,
      },
    });

    if (!adventures) {
      throw new HttpException('Adventure not found', HttpStatus.NOT_FOUND);
    }
    return await adventures;
  }

  async updateEndedAt(adventureId: number): Promise<Adventure> {
    const existingAdventure = await prisma.adventure.findUnique({
      where: { id: adventureId },
    });
    if (!existingAdventure) {
      throw new HttpException('Adventure not found', HttpStatus.NOT_FOUND);
    }
    
    const updatedAdventure = await prisma.adventure.update({
      where: { id: adventureId },
      data: { endedAt: new Date() },
    });
    return updatedAdventure;
  }
}
