import { ApiProperty } from '@nestjs/swagger';
import { AnswerType } from '@prisma/client';

export class AddNextStepForAdventureDto {
  @ApiProperty()
  userUuid: string;
  @ApiProperty()
  answerType: AnswerType;
}
