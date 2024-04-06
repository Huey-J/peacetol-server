import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.APP_PORT || 8000;

  // OpenAPI(Swagger) 설정
  const config = new DocumentBuilder().setTitle('Peacetol').setDescription('API description').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger/docs', app, document);

  // CORS 설정
  // 특정 origin만 요청 허용
  app.enableCors({
    // origin: appConfig.get("app.env") === "production" ? appConfig.get("app.domain") : "*",
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
  });
  app.enableVersioning({
    type: VersioningType.URI,
  });

  await app.listen(port);
  console.log(`listening on port ${port}`);
}
bootstrap();
