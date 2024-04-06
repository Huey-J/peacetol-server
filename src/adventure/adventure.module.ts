import { Module } from '@nestjs/common';
import { AdventureController } from './adventure.controller';
import { AdventureService } from './adventure.service';
import { AdventureRepository } from './adventure.repository';
import { UserRepository } from 'src/user/user.repository';

@Module({
  controllers: [AdventureController],
  providers: [AdventureService, AdventureRepository, UserRepository],
})
export class AdventureModule {}