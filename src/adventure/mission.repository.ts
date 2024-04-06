import { Injectable } from '@nestjs/common';
import prisma from '../../prisma/context';
import { Mission } from '@prisma/client';

@Injectable()
export class MissionRepository {
  async findAllByAdventureId(adventureId: number): Promise<Mission[]> {
    const missions = prisma.mission.findMany({
      where: {
        adventureId: adventureId,
      },
    });

    return await missions;
  }
}
