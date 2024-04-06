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

  async findByAdventureIdAndStep(adventureId: number, step: number): Promise<Mission> {
    const mission = prisma.mission.findFirst({
      where: {
        adventureId: adventureId,
        step: step
      }
    });

    return await mission;
  }
}
