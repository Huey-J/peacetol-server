import { Injectable } from '@nestjs/common';
import { CreateAdventureDto } from './dto/create.adventure.request';
import { AdventureRepository } from './adventure.repository';
import { UserRepository } from '../user/user.repository';
import { PrismaClient } from '@prisma/client';
import { AdventureResponseDto, Mission } from './dto/adventure.response';

@Injectable()
export class AdventureService {
  private prisma = new PrismaClient();
  constructor(
    private readonly adventureRepository: AdventureRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async createAdventure(createAdventureDto: CreateAdventureDto): Promise<AdventureResponseDto> {
    const { difficulty, userUuid } = createAdventureDto;
    const userId = await this.userRepository.findUser(userUuid);

    const createdAdventure = await this.adventureRepository.createAdventure(difficulty, userId);

    const missions: Mission[] = [];
    for (let step = 1; step < 4; step++) {
      const templates = await this.prisma.missionTemplate.findMany({
        where: { step },
      });
      const selectedTemplate = templates[Math.floor(Math.random() * templates.length)];

      const mission = await this.prisma.mission.create({
        data: {
          body: selectedTemplate.body.replace('${number}', '' + (Math.floor(Math.random() * selectedTemplate.endNumber) + 1)),
          quote: selectedTemplate.quote,
          imagePath: selectedTemplate.imagePath,
          adventureId: createdAdventure.id,
        },
      });
      missions.push(mission);
    }

    const responseDto = new AdventureResponseDto();
    responseDto.id = createdAdventure.id;
    responseDto.createdAt = createdAdventure.createdAt;
    responseDto.endedAt = createdAdventure.endedAt;
    responseDto.difficulty = createdAdventure.difficulty;
    responseDto.missions = missions;

    return responseDto;
  }
}
