import { Controller, Get, Param, Req } from '@nestjs/common';
import { HelloService } from './hello.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('헬로 헬로')
@Controller('hello')
export class HelloController {

  constructor(private readonly helloService: HelloService) {}

  @ApiOperation({ summary: '헬로 n번 API', description: '안녕하신가요' })
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `say hello ${id} times`;
  }

  @ApiOperation({ summary: '헬로 서비스~', description: '이건 서비스를 호출해서 반환' })
  @Get('with-service')
  findWithService(): string {
    return this.helloService.getHello()
  }
}