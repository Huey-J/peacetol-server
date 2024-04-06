import { ApiProperty } from "@nestjs/swagger";

export class CreateReviewDto {
  @ApiProperty()
  star: number;
}

export class CreateReviewResponseDto {
  @ApiProperty()
  review_id: number;
  @ApiProperty()
  adventure_id: number;
}
