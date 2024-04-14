import { Controller, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { HelloService } from './hello.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('HelloController')
@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @ApiOperation({ summary: '헬로 서비스~', description: '서비스를 호출해서 반환' })
  @Post('with-service')
  returnWithService(): string {
    return this.helloService.getHello();
  }

  @ApiOperation({ summary: '헬로 서비스~', description: 'exception 반환' })
  @Put('with-exception')
  returnException(): string {
    throw new HttpException('hello this is exception message', HttpStatus.FORBIDDEN);
  }

  @ApiOperation({ summary: '헬로 n번 API', description: '안녕하신가요' })
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `say hello ${id} times`;
  }
}
