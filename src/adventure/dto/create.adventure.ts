import { ApiProperty } from "@nestjs/swagger";
import { AnswerType } from '@prisma/client';
import { MissionDto } from './create.mission';

export class CreateAdventureDto {
  @ApiProperty()
  difficulty: number;
  @ApiProperty()
  userUuid: string;
}

export class CreateAdventureResponseDto {
  @ApiProperty()
  id: number;
}

export class AdventureResponseDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  endedAt: Date;
  @ApiProperty()
  difficulty: number;

  @ApiProperty({
    isArray: true,
    type: MissionDto,
  })
  missions: MissionDto[];
}

export class AddNestStepDto {
  @ApiProperty()
  userUuid: string;
  @ApiProperty()
  answerType: AnswerType;
}

export class CountResponseDto {
  @ApiProperty()
  count: number;
}

export class RecentResponseDto {
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  endedAt: Date;
  @ApiProperty()
  difficulty: number;
  @ApiProperty()
  review_star: number;
}
