import { Module } from '@nestjs/common';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import { MongoDBModule } from 'src/utils/mongo.module';
import { TeamRepository } from './team.repository';

@Module({
  imports: [MongoDBModule.forRootTeam()],
  controllers: [TeamController],
  providers: [TeamService, TeamRepository],
  exports: [TeamService, TeamRepository],
})
export class TeamModule {}
