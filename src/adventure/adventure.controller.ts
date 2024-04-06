import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AdventureService } from './adventure.service';
import { AdventureResponseDto } from './dto/adventure.response';
import { CreateAdventureDto } from './dto/create.adventure.request';

@ApiTags('AdventureController')
@Controller('/api/v1/adventures')
export class AdventureController {
  constructor(private readonly adventureService: AdventureService) {}

  @ApiOperation({ summary: '모험 생성' })
  @ApiResponse({
    status: 201,
    type: AdventureResponseDto,
  })
  @Post()
  async create(@Body() createAdventureDto: CreateAdventureDto): Promise<AdventureResponseDto> {
    console.log(createAdventureDto)
    return await this.adventureService.createAdventure(createAdventureDto);
  }

  @ApiOperation({ summary: '모험의 다음 단계 생성' })
  @Put('/:id/next-step')
  async addNextStep(@Param('id') id: number): Promise<void> {}

  @ApiOperation({ summary: '모험의 마지막 단계 생성' })
  @Put('/:id/final-step')
  async addFinalStep(@Param('id') id: number): Promise<void> {}

  @ApiOperation({ summary: '모험 마무리' })
  @Post('/:id/finish')
  async finishAdventure(@Param('id') id: number): Promise<void> {}
}
