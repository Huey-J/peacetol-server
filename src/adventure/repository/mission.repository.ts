import { Injectable } from '@nestjs/common';
import { Mission, MissionTemplate } from '@prisma/client';
import prisma from '../../../prisma/context';

@Injectable()
export class MissionRepository {
  async createMissionFromTemplate(missionTemplate: MissionTemplate, adventureId: number): Promise<Mission> {
    const mission = prisma.mission.create({
      data: {
        step: missionTemplate.step,
        body: missionTemplate.body.replace('${number}', '' + (Math.floor(Math.random() * missionTemplate.endNumber) + 1)),
        quote: missionTemplate.quote,
        imagePath: missionTemplate.imagePath,
        isTransportation: missionTemplate.isTransportation,
        adventureId: adventureId,
      },
    });

    return await mission;
  }

  async findAllByAdventureId(adventureId: number): Promise<Mission[]> {
    const missions = prisma.mission.findMany({
      where: {
        adventureId: adventureId,
      },
    });

    return await missions;
  }

  async findLength(adventureId: number): Promise<number> {
    const missions = prisma.mission.findMany({
      where: {
        adventureId: adventureId,
      },
    });

    return (await missions).length;
  }

  async findByAdventureIdAndStep(adventureId: number, step: number): Promise<Mission> {
    const mission = prisma.mission.findFirst({
      where: {
        adventureId: adventureId,
        step: step,
      },
    });

    return await mission;
  }
}
