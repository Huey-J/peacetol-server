import { Injectable } from '@nestjs/common';
import { Adventure } from '@prisma/client';
import { AdventureRepository } from './repository/adventure.repository';
import { ReviewRepository } from './repository/review.repository';
import { UserRepository } from '../user/user.repository';
import { MissionRepository } from './repository/mission.repository';
import { MissionTemplateRepository } from './repository/missionTemplate.repository';

import {
  AdventureResponseDto,
  CountResponseDto,
  CreateAdventureDto,
  CreateAdventureResponseDto,
  AddNestStepDto,
  RecentResponseDto,
} from './dto/create.adventure';
import { CreateReviewDto, CreateReviewResponseDto } from './dto/create.review';
import { MissionDto } from './dto/create.mission';

@Injectable()
export class AdventureService {
  constructor(
    private readonly adventureRepository: AdventureRepository,
    private readonly userRepository: UserRepository,
    private readonly missionRepository: MissionRepository,
    private readonly missionTemplateRepository: MissionTemplateRepository,
    private readonly reviewRepository: ReviewRepository,
  ) {}

  async getById(adventureId: string): Promise<AdventureResponseDto> {
    const adventure = await this.adventureRepository.getById(parseInt(adventureId));
    const missions = await this.missionRepository.findAllByAdventureId(parseInt(adventureId));
    const user = await this.userRepository.findById(adventure.userId);

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
    responseDto.createdBy = user.uuid;
    responseDto.missions = missionsDtoList;
    return responseDto;
  }

  async createReview(id: string, createReviewDto: CreateReviewDto): Promise<CreateReviewResponseDto> {
    const { star } = createReviewDto;
    const adventureId = parseInt(id);
    const createdReview = await this.reviewRepository.createReview(star, adventureId);

    const adventure = await this.adventureRepository.updateEndedAt(adventureId);

    const response = new CreateReviewResponseDto();
    response.review_id = createdReview.id;
    response.adventure_id = adventure.id;
    return response;
  }

  async getAdventureCount(uuid: string): Promise<CountResponseDto> {
    const userId = await this.userRepository.findUser(uuid);

    const adventures = await this.adventureRepository.getByUserId(userId);
    const count = adventures.filter((adventure) => adventure.endedAt !== null).length;

    const response = new CountResponseDto();
    response.count = count;
    return response;
  }

  async getRecentAdventure(uuid: string): Promise<RecentResponseDto[]> {
    const userId = await this.userRepository.findUser(uuid);

    const adventures = await this.adventureRepository.getByUserId(userId);
    const recentAdventures = adventures.filter((adventure) => adventure.endedAt !== null).sort((a, b) => b.endedAt.getTime() - a.endedAt.getTime());

    const response = await Promise.all(
      recentAdventures.map(async (adventure) => {
        const dto = new RecentResponseDto();
        dto.createdAt = adventure.createdAt;
        dto.endedAt = adventure.endedAt;
        dto.difficulty = adventure.difficulty;
        dto.review_star = await this.reviewRepository.findStarByAdventureId(adventure.id);
        return dto;
      }),
    );

    return response;
  }

  async createAdventure(createAdventureDto: CreateAdventureDto): Promise<CreateAdventureResponseDto> {
    const { difficulty, userUuid } = createAdventureDto;
    const userId = await this.userRepository.findUser(userUuid);

    const createdAdventure = await this.adventureRepository.createAdventure(difficulty, userId);

    const templateFirstList = await this.missionTemplateRepository.findList(1);
    const selectedFirstTemplate = templateFirstList[Math.floor(Math.random() * templateFirstList.length)];
    const missionOne = await this.missionRepository.createMissionFromTemplate(selectedFirstTemplate, createdAdventure.id);

    const isTransportation = missionOne.isTransportation;
    for (let step = 2; step < 5; step++) {
      const templates = await this.missionTemplateRepository.findListWithOR(step, isTransportation);
      const selectedTemplate = templates[Math.floor(Math.random() * templates.length)];
      const mission = await this.missionRepository.createMissionFromTemplate(selectedTemplate, createdAdventure.id);
    }

    const response = new CreateAdventureResponseDto();
    response.id = createdAdventure.id;
    return response;
  }

  async addFinalStep(adventureId: string, addNextStepForAdventureDto: AddNestStepDto): Promise<CreateAdventureResponseDto> {
    const { userUuid, answerType } = addNextStepForAdventureDto;

    const adventure: Adventure = await this.adventureRepository.getById(parseInt(adventureId));
    const userId: number = await this.userRepository.findUser(userUuid);

    if (adventure.userId !== userId) {
      // todo exception...
      throw new Error('Not your adventure.');
    }

    const templateEightList = await this.missionTemplateRepository.findListWithAnswer(8, answerType);
    const selectedEightTemplate = templateEightList[Math.floor(Math.random() * templateEightList.length)];
    const missionEight = await this.missionRepository.createMissionFromTemplate(selectedEightTemplate, adventure.id);

    if (adventure.difficulty > 2) {
      const templateSixList = await this.missionTemplateRepository.findList(9);
      const selectedSixTemplate = templateSixList[Math.floor(Math.random() * templateSixList.length)];
      const missionSix = await this.missionRepository.createMissionFromTemplate(selectedSixTemplate, adventure.id);

      const templateSevenList = await this.missionTemplateRepository.findList(10);
      const selectedSevenTemplate = templateSevenList[Math.floor(Math.random() * templateSevenList.length)];
      const missionSeven = await this.missionRepository.createMissionFromTemplate(selectedSevenTemplate, adventure.id);
    }

    const response = new CreateAdventureResponseDto();
    response.id = adventure.id;
    return response;
  }

  async addNextStep(adventureId: string, addNextStepForAdventureDto: AddNestStepDto): Promise<CreateAdventureResponseDto> {
    const { userUuid, answerType } = addNextStepForAdventureDto;

    const adventure: Adventure = await this.adventureRepository.getById(parseInt(adventureId));
    const userId: number = await this.userRepository.findUser(userUuid);

    if (adventure.userId !== userId) {
      // todo exception...
      throw new Error('Not your adventure.');
    }

    const length = await this.missionRepository.findLength(adventure.id);

    if (length > 4) {
      throw new Error('Already exist');
    }
    const templateFiveList = await this.missionTemplateRepository.findListWithAnswer(5, answerType);
    const selectedFiveTemplate = templateFiveList[Math.floor(Math.random() * templateFiveList.length)];
    const missionFive = await this.missionRepository.createMissionFromTemplate(selectedFiveTemplate, adventure.id);

    if (adventure.difficulty > 1) {
      const templateSixList = await this.missionTemplateRepository.findList(6);
      const selectedSixTemplate = templateSixList[Math.floor(Math.random() * templateSixList.length)];
      const missionSix = await this.missionRepository.createMissionFromTemplate(selectedSixTemplate, adventure.id);

      const templateSevenList = await this.missionTemplateRepository.findList(7);
      const selectedSevenTemplate = templateSevenList[Math.floor(Math.random() * templateSevenList.length)];
      const missionSeven = await this.missionRepository.createMissionFromTemplate(selectedSevenTemplate, adventure.id);
    }

    const response = new CreateAdventureResponseDto();
    response.id = adventure.id;
    return response;
  }
}
