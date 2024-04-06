import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [HelloModule, UserModule],
})
export class AppModule {}
