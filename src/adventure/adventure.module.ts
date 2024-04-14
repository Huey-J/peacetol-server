import { Module } from '@nestjs/common';
import { AdventureController } from './adventure.controller';
import { AdventureService } from './adventure.service';
import { AdventureRepository } from './repository/adventure.repository';
import { UserRepository } from 'src/user/user.repository';
import { MissionRepository } from './repository/mission.repository';
import { ReviewRepository } from './repository/review.repository';
import { MissionTemplateRepository } from './repository/missionTemplate.repository';

@Module({
  controllers: [AdventureController],
  providers: [AdventureService, AdventureRepository, UserRepository, ReviewRepository, MissionRepository, MissionTemplateRepository],
})
export class AdventureModule {}
