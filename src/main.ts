import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.APP_PORT || 8000;

  // OpenAPI(Swagger) 설정
  const config = new DocumentBuilder().setTitle('Peacetol').setDescription('API description').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger/docs', app, document);

  await app.listen(port);
  console.log(`listening on port ${port}`);
}
bootstrap();
