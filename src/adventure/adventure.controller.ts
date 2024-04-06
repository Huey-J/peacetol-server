import { Body, Controller, Get, Param, Post, Put, Query, Req } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AdventureService } from './adventure.service';

import {
  AdventureResponseDto,
  CountResponseDto,
  CreateAdventureDto,
  CreateAdventureResponseDto,
  AddNestStepDto,
  RecentResponseDto,
} from './dto/create.adventure';
import { CreateReviewDto, CreateReviewResponseDto } from './dto/create.review';

@ApiTags('AdventureController')
@Controller('/api/v1/adventures')
export class AdventureController {
  constructor(private readonly adventureService: AdventureService) {}

  @Get('/:id')
  @ApiResponse({
    status: 200,
    type: AdventureResponseDto,
  })
  async getById(@Param('id') id: string): Promise<AdventureResponseDto> {
    return await this.adventureService.getById(id);
  }

  @ApiOperation({ summary: '모험 생성' })
  @ApiResponse({
    status: 201,
    type: CreateAdventureResponseDto,
  })
  @Post()
  async create(@Body() createAdventureDto: CreateAdventureDto): Promise<CreateAdventureResponseDto> {
    return await this.adventureService.createAdventure(createAdventureDto);
  }

  @ApiOperation({ summary: '모험의 다음 단계 생성' })
  @ApiResponse({
    status: 200,
    type: CreateAdventureResponseDto,
  })
  @Put('/:id/next-step')
  async addNextStep(@Param('id') id: string, @Body() addNextStepForAdventureDto: AddNestStepDto): Promise<CreateAdventureResponseDto> {
    return await this.adventureService.addNextStep(id, addNextStepForAdventureDto);
  }

  @ApiOperation({ summary: '모험의 마지막 단계 생성' })
  @Put('/:id/final-step')
  async addFinalStep(@Param('id') id: string, @Body() addNextStepForAdventureDto: AddNestStepDto): Promise<CreateAdventureResponseDto> {
    return await this.adventureService.addFinalStep(id, addNextStepForAdventureDto);
  }

  @ApiOperation({ summary: '모험 마무리' })
  @ApiResponse({
    status: 200,
    type: CreateReviewResponseDto,
  })
  @Put('/:id/finish')
  async finishAdventure(@Param('id') id: string, @Body() createReviewDto: CreateReviewDto): Promise<CreateReviewResponseDto> {
    return await this.adventureService.createReview(id, createReviewDto);
  }

  @ApiOperation({ summary: 'adventure 개수 세기' })
  @ApiResponse({
    status: 200,
    type: CountResponseDto,
  })
  @Get('/count/:uuid')
  async getAdventureCount(@Param('uuid') uuid: string): Promise<CountResponseDto> {
    return await this.adventureService.getAdventureCount(uuid);
  }

  @ApiOperation({ summary: '최근 adventure 순서' })
  @ApiResponse({
    status: 200,
    type: RecentResponseDto,
  })
  @Get('/recent/:uuid')
  async getRecentAdventure(@Param('uuid') uuid: string): Promise<RecentResponseDto[]> {
    return await this.adventureService.getRecentAdventure(uuid);
  }
}
