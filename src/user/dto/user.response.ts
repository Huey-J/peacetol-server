import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    example: '0c6962ee-3658-4201-b74a-de81979f49ed',
  })
  uuid: string;
}
