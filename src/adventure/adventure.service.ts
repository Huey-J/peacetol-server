import { Injectable } from '@nestjs/common';
import { AdventureRepository } from './adventure.repository';
import { ReviewRepository } from './review.repository';
import { UserRepository } from '../user/user.repository';
import { Adventure, AnswerType, Mission, PrismaClient } from '@prisma/client';
import { MissionRepository } from './mission.repository';

import { CreateAdventureDto, CreateCountDto } from './dto/create.adventure.request';
import { AdventureResponseDto, MissionDto } from './dto/adventure.response';
import { AddNextStepForAdventureDto } from './dto/add.next.step.for.adventure.request';
import { AdventureCreationResponseDto, AdventureCountCreationResponseDto } from './dto/create.adventure.response';
import { CreateReviewDto, ReviewCreationResponseDto } from './dto/create.review';

@Injectable()
export class AdventureService {
  private prisma = new PrismaClient();
  constructor(
    private readonly adventureRepository: AdventureRepository,
    private readonly userRepository: UserRepository,
    private readonly missionRepository: MissionRepository,
    private readonly reviewRepository: ReviewRepository,
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

  async createReview(id: string, createReviewDto: CreateReviewDto): Promise<ReviewCreationResponseDto> {
    const { star } = createReviewDto;
    const adventureId = parseInt(id);
    const createdReview = await this.reviewRepository.createReview(star, adventureId);

    const adventure = await this.adventureRepository.updateEndedAt(adventureId);

    const response = new ReviewCreationResponseDto();
    response.review_id = createdReview.id;
    response.adventure_id = adventure.id;
    return response;
  }

  async getAdventureCount(uuid: string): Promise<AdventureCountCreationResponseDto> {
    const userId = await this.userRepository.findUser(uuid);

    const adventures = await this.adventureRepository.getByUserId(userId);
    const count = adventures.filter((adventure) => adventure.endedAt !== null).length;

    const response = new AdventureCountCreationResponseDto();
    response.count = count;
    return response;
  }

  async createAdventure(createAdventureDto: CreateAdventureDto): Promise<AdventureCreationResponseDto> {
    const { difficulty, userUuid } = createAdventureDto;
    const userId = await this.userRepository.findUser(userUuid);

    const createdAdventure = await this.adventureRepository.createAdventure(difficulty, userId);

    // 1번 미션의 isTransportation 따라 2번 3번 미션 달라져야 함
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
    const { userUuid, answerType } = addNextStepForAdventureDto;

    const adventure: Adventure = await this.adventureRepository.getById(parseInt(adventureId));
    const userId: number = await this.userRepository.findUser(userUuid);

    if (adventure.userId !== userId) {
      // todo exception...
      throw new Error('Not your adventure.');
    }

    // const firstMission = await this.missionRepository.findByAdventureIdAndStep(parseInt(adventureId), 1);

    const templateFiveList = await this.prisma.missionTemplate.findMany({
      where: { step: 5, answerType: answerType },
    });
    const selectedFiveTemplate = templateFiveList[Math.floor(Math.random() * templateFiveList.length)];
    const missionFive = await this.prisma.mission.create({
      data: {
        step: selectedFiveTemplate.step,
        body: selectedFiveTemplate.body.replace('${number}', '' + (Math.floor(Math.random() * selectedFiveTemplate.endNumber) + 1)),
        quote: selectedFiveTemplate.quote,
        imagePath: selectedFiveTemplate.imagePath,
        isTransportation: selectedFiveTemplate.isTransportation,
        adventureId: adventure.id,
      },
    });

    const templateSixList = await this.prisma.missionTemplate.findMany({
      where: { step: 6 },
    });
    const selectedSixTemplate = templateSixList[Math.floor(Math.random() * templateSixList.length)];
    const missionSix = await this.prisma.mission.create({
      data: {
        step: selectedSixTemplate.step,
        body: selectedSixTemplate.body.replace('${number}', '' + (Math.floor(Math.random() * selectedSixTemplate.endNumber) + 1)),
        quote: selectedSixTemplate.quote,
        imagePath: selectedSixTemplate.imagePath,
        isTransportation: selectedSixTemplate.isTransportation,
        adventureId: adventure.id,
      },
    });

    const templateSevenList = await this.prisma.missionTemplate.findMany({
      where: { step: 7 },
    });
    const selectedSevenTemplate = templateSevenList[Math.floor(Math.random() * templateSevenList.length)];
    const missionSeven = await this.prisma.mission.create({
      data: {
        step: selectedSevenTemplate.step,
        body: selectedSevenTemplate.body.replace('${number}', '' + (Math.floor(Math.random() * selectedSevenTemplate.endNumber) + 1)),
        quote: selectedSevenTemplate.quote,
        imagePath: selectedSevenTemplate.imagePath,
        isTransportation: selectedSevenTemplate.isTransportation,
        adventureId: adventure.id,
      },
    });

    const response = new AdventureCreationResponseDto();
    response.id = adventure.id;
    return response;
  }
}
