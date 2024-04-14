import { Injectable } from '@nestjs/common';
import { AnswerType, MissionTemplate } from '@prisma/client';
import prisma from '../../../prisma/context';

@Injectable()
export class MissionTemplateRepository {
  async findList(step: number): Promise<MissionTemplate[]> {
    const templates = prisma.missionTemplate.findMany({
      where: {
        step: step,
      },
    });

    return await templates;
  }

  async findListWithAnswer(step: number, answerType: AnswerType): Promise<MissionTemplate[]> {
    const templates = prisma.missionTemplate.findMany({
      where: {
        step: step,
        answerType: answerType,
      },
    });

    return await templates;
  }

  async findListWithOR(step: number, isTransportation: boolean): Promise<MissionTemplate[]> {
    const templates = prisma.missionTemplate.findMany({
      where: {
        step: step,
        OR: [{ isTransportation: isTransportation }, { isTransportation: null }],
      },
    });

    return await templates;
  }
}
