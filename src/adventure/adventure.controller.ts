import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AdventureService } from './adventure.service';
import { AdventureResponseDto } from './dto/adventure.response';
import { CreateAdventureDto } from './dto/create.adventure.request';
import { AdventureCreationResponseDto } from './dto/create.adventure.response';
// import { AddNextStepForAdventureDto } from './dto/add.next.step.for.adventure.request';

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
    type: AdventureResponseDto,
  })
  @Post()
  async create(@Body() createAdventureDto: CreateAdventureDto): Promise<AdventureCreationResponseDto> {
    return await this.adventureService.createAdventure(createAdventureDto);
  }

  // @ApiOperation({ summary: '모험의 다음 단계 생성' })
  // @ApiResponse({
  //   status: 200,
  //   type: AdventureResponseDto,
  // })
  // @Put('/:id/next-step')
  // async addNextStep(@Param('id') id: number, @Body() addNextStepForAdventureDto: AddNextStepForAdventureDto): Promise<AdventureResponseDto> {
  //   return await this.adventureService.addNextStep(id, addNextStepForAdventureDto);
  // }

  @ApiOperation({ summary: '모험의 마지막 단계 생성' })
  @Put('/:id/final-step')
  async addFinalStep(@Param('id') id: number): Promise<void> {}

  @ApiOperation({ summary: '모험 마무리' })
  @Post('/:id/finish')
  async finishAdventure(@Param('id') id: number): Promise<void> {}
}
