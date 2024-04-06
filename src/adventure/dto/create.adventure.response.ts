import { ApiProperty } from "@nestjs/swagger";

export class AdventureCreationResponseDto {
  @ApiProperty()
  id: number;
}

export class AdventureCountCreationResponseDto {
  @ApiProperty()
  count: number;
}
