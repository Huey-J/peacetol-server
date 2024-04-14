import { ApiProperty } from '@nestjs/swagger';

export class MissionDto {
  @ApiProperty()
  body: string;
  @ApiProperty()
  quote: string;
  @ApiProperty()
  imagePath: string;
}
