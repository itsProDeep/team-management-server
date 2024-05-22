import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TeamService } from './team.service';
import { AddTeamMemberDto, UpdateTeamMemberDto } from './team.dto';

@Controller('team')
export class TeamController {
  constructor(
    private readonly configService: ConfigService,
    private readonly teamService: TeamService,
  ) {
    try {
    } catch (ex) {
      console.log('Unable to initialize Team Controller ', ex);
      throw ex;
    }
  }

  @Get('/members')
  async getTeamMembers(
    @Query('pageNo') pageNo: string,
    @Query('pageSize') pageSize: string,
  ): Promise<any> {
    try {
      const page = parseInt(pageNo, 10) || 1;
      const limit = parseInt(pageSize, 10) || 10;
      return await this.teamService.getAllTeamMembers(page, limit);
    } catch (ex) {
      throw ex;
    }
  }

  @Post('/addMember')
  async addTeamMember(
    @Body() addTeamMemberDto: AddTeamMemberDto,
  ): Promise<any> {
    try {
      const res = await this.teamService.addTeamMember(addTeamMemberDto);
      if (res?.code === 11000) {
        throw new ConflictException(res);
      }
      return res;
    } catch (ex) {
      throw ex;
    }
  }

  @Put('/updateMember/:id')
  async updateTeamMember(
    @Param('id') id: string,
    @Body() updateTeamMemberDto: UpdateTeamMemberDto,
  ): Promise<any> {
    try {
      if (!id) {
        throw new BadRequestException('Id is required!');
      }
      const res = await this.teamService.updateTeamMember(
        id,
        updateTeamMemberDto,
      );
      if (res?.code === 11000) {
        throw new ConflictException(res);
      }
      return res;
    } catch (ex) {
      throw ex;
    }
  }

  @Delete('/member/:id')
  async delMember(@Param('id') id: string): Promise<any> {
    try {
      if (!id) {
        throw new BadRequestException('Id is required!');
      }
      return await this.teamService.delTeamMember(id);
    } catch (ex) {
      throw ex;
    }
  }
}
