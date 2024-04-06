import { ApiProperty } from "@nestjs/swagger";

export class AddNextStepForAdventureDto {

  @ApiProperty()
  difficulty: number;
  @ApiProperty()
  userUuid: string;
}
