import { ApiProperty } from "@nestjs/swagger";

export class CreateAdventureDto {

  @ApiProperty()
  difficulty: number;
  @ApiProperty()
  userUuid: string;
}
