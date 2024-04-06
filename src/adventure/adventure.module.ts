import { Module } from '@nestjs/common';
import { AdventureController } from './adventure.controller';
import { AdventureService } from './adventure.service';
import { AdventureRepository } from './adventure.repository';
import { UserRepository } from 'src/user/user.repository';
import { MissionRepository } from './mission.repository';

@Module({
  controllers: [AdventureController],
  providers: [AdventureService, AdventureRepository, UserRepository, MissionRepository],
})
export class AdventureModule {}