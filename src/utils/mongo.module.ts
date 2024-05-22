import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { TeamMembersEntity } from './schema/team-members-schema';

@Module({})
export class MongoDBModule {
  static forRootTeam(): DynamicModule {
    return {
      module: MongoDBModule,
      imports: [
        MongooseModule.forRootAsync({
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => {
            const mongoConfig = configService.get('config.mongoDB');
            const teamUri: string = `mongodb+srv://${mongoConfig.username}:${mongoConfig.password}@${mongoConfig.host}`;
            console.log('URI==>', teamUri);
            return { uri: teamUri };
          },
        }),
        MongooseModule.forFeature([TeamMembersEntity]),
      ],
      exports: [MongooseModule],
    };
  }
}
