import { ApiProperty } from "@nestjs/swagger";

export class AdventureCreationResponseDto {
  @ApiProperty()
  id: number;
}

export class AdventureCountCreationResponseDto {
  @ApiProperty()
  count: number;
}

export class RecentAdventureResponseDto {
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  endedAt: Date;
  @ApiProperty()
  difficulty: number;
  @ApiProperty()
  review_star: number;
}
