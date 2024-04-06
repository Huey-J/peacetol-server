import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { UserModule } from './user/user.module';
import { AdventureModule } from './adventure/adventure.module';

@Module({
  imports: [HelloModule, UserModule, AdventureModule],
})
export class AppModule {}
