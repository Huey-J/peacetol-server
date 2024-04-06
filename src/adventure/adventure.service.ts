import { Injectable } from '@nestjs/common';
import { CreateAdventureDto } from './dto/create.adventure.request';
import { AdventureRepository } from './adventure.repository';
import { UserRepository } from '../user/user.repository';
import { PrismaClient } from '@prisma/client';
import { AdventureResponseDto, MissionDto } from './dto/adventure.response';
import { AddNextStepForAdventureDto } from './dto/add.next.step.for.adventure.request';
import { MissionRepository } from './mission.repository';
import { AdventureCreationResponseDto } from './dto/create.adventure.response';

@Injectable()
export class AdventureService {
  private prisma = new PrismaClient();
  constructor(
    private readonly adventureRepository: AdventureRepository,
    private readonly userRepository: UserRepository,
    private readonly missionRepository: MissionRepository,
  ) {}

  async getById(adventureId: string): Promise<AdventureResponseDto> {
    const adventure = await this.adventureRepository.getById(parseInt(adventureId));
    const missions = await this.missionRepository.findAllByAdventureId(parseInt(adventureId));

    const missionsDtoList: MissionDto[] = [];
    missions.forEach((m) => {
      const missionDto = new MissionDto();
      missionDto.body = m.body;
      missionDto.imagePath = m.imagePath;
      missionDto.quote = m.quote;
      missionsDtoList.push(missionDto);
    });

    const responseDto = new AdventureResponseDto();
    responseDto.id = adventure.id;
    responseDto.createdAt = adventure.createdAt;
    responseDto.endedAt = adventure.endedAt;
    responseDto.difficulty = adventure.difficulty;
    responseDto.missions = missionsDtoList;
    return responseDto;
  }

  async createAdventure(createAdventureDto: CreateAdventureDto): Promise<AdventureCreationResponseDto> {
    const { difficulty, userUuid } = createAdventureDto;
    const userId = await this.userRepository.findUser(userUuid);

    const createdAdventure = await this.adventureRepository.createAdventure(difficulty, userId);

    for (let step = 1; step < 4; step++) {
      const templates = await this.prisma.missionTemplate.findMany({
        where: { step },
      });
      const selectedTemplate = templates[Math.floor(Math.random() * templates.length)];

      const mission = await this.prisma.mission.create({
        data: {
          step: selectedTemplate.step,
          body: selectedTemplate.body.replace('${number}', '' + (Math.floor(Math.random() * selectedTemplate.endNumber) + 1)),
          quote: selectedTemplate.quote,
          imagePath: selectedTemplate.imagePath,
          isTransportation: selectedTemplate.isTransportation,
          adventureId: createdAdventure.id,
        },
      });
    }

    const response = new AdventureCreationResponseDto();
    response.id = createdAdventure.id;
    return response;
  }

  async addNextStep(adventureId: string, addNextStepForAdventureDto: AddNextStepForAdventureDto): Promise<AdventureCreationResponseDto> {
    const {userUuid, answerType} = addNextStepForAdventureDto;

    const adventure = this.adventureRepository.getById(parseInt(adventureId));
    const userId = await this.userRepository.findUser(userUuid);

    // todo await 빼기...
    if ((await adventure).userId !== userId) {
      // todo exception
      throw new Error('Not your adventure.');
    }

    // bus 일 경우

    // 아닐 경우


    // type으로 필터링해서 missionTemplate 조회


    // todo
    const response = new AdventureCreationResponseDto();
    // response.id = createdAdventure.id;
    // return response;
    return response;
  }
}
