import { Injectable } from '@nestjs/common';
import { TeamRepository } from './team.repository';
import { AddTeamMemberDto, UpdateTeamMemberDto } from './team.dto';

@Injectable()
export class TeamService {
  constructor(private readonly teamRepository: TeamRepository) {
    try {
    } catch (ex) {
      console.log('Unable to initialize Team Service ', ex);
      throw ex;
    }
  }

  async getAllTeamMembers(page: number, limit: number): Promise<any> {
    try {
      return await this.teamRepository.getAllTeamMembersRepo(page, limit);
    } catch (ex) {
      throw ex;
    }
  }

  async addTeamMember(addTeamMemberdto: AddTeamMemberDto): Promise<any> {
    try {
      return await this.teamRepository.addTeamMemberRepo(addTeamMemberdto);
    } catch (ex) {
      throw ex;
    }
  }

  async updateTeamMember(
    id: string,
    updateTeamMember: UpdateTeamMemberDto,
  ): Promise<any> {
    try {
      return await this.teamRepository.updateTeamMemberRepo(
        id,
        updateTeamMember,
      );
    } catch (ex) {
      throw ex;
    }
  }

  async delTeamMember(id: string): Promise<any> {
    try {
      return await this.teamRepository.delMemberRepo(id);
    } catch (ex) {
      throw ex;
    }
  }
}
