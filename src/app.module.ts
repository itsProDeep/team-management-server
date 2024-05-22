import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilsModule } from './utils/utils.module';
import configuration from './configuration';
import { ConfigModule } from '@nestjs/config';
import { TeamModule } from './team/team.module';

@Module({
  imports: [
    UtilsModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TeamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
