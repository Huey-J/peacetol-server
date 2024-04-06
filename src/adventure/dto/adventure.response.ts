import { ApiProperty } from '@nestjs/swagger';

export class MissionDto {
  @ApiProperty()
  body: String;
  @ApiProperty()
  quote: String;
  @ApiProperty()
  imagePath: String;
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
