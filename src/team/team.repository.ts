import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  TeamMembers,
  TeamMembersDocument,
} from 'src/utils/schema/team-members-schema';
import { AddTeamMemberDto, UpdateTeamMemberDto } from './team.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TeamRepository {
  constructor(
    @InjectModel(TeamMembers.name)
    private readonly teamMembersModel: Model<TeamMembersDocument>,
  ) {
    try {
    } catch (ex) {
      console.log('Unable to initialize Team repo ', ex);
      throw ex;
    }
  }

  async getAllTeamMembersRepo(page: number, limit: number): Promise<any> {
    try {
      const teamMembers = await this.teamMembersModel
        .find({ del: false })
        .skip((page - 1) * limit)
        .limit(limit);
      console.log('team', teamMembers);
      return teamMembers;
    } catch (ex) {
      throw ex;
    }
  }

  async addTeamMemberRepo(addTeamMember: AddTeamMemberDto): Promise<any> {
    try {
      const insertRes = await this.teamMembersModel.insertMany([
        {
          first_name: addTeamMember.first_name,
          last_name: addTeamMember.last_name,
          email: addTeamMember.email,
          phone: addTeamMember.phone,
          del: false,
          id: uuidv4(),
          role: addTeamMember.role,
          createdAt: new Date().valueOf(),
          updatedAt: new Date().valueOf(),
        },
      ]);

      if (insertRes && insertRes.length)
        return { Message: 'Added successfully!', insertRes };
      return { Message: 'Some Error occoured' };
    } catch (ex) {
      if (ex?.code === 11000) {
        return { code: 11000, message: 'Duplicate email!' };
      }
      throw ex;
    }
  }

  async updateTeamMemberRepo(
    id,
    updateTeamMemberDto: UpdateTeamMemberDto,
  ): Promise<any> {
    try {
      const updateRes = await this.teamMembersModel
        .findOneAndUpdate({ id, del: false }, updateTeamMemberDto, {
          new: true,
        })
        .exec();
      console.log(updateRes);
      if (updateRes) {
        return { Message: 'Updated!', updateRes };
      }
      return { Message: 'Some Error occured' };
    } catch (ex) {
      if (ex?.code === 11000) {
        return { code: 11000, message: 'Duplicate email!' };
      }
      throw ex;
    }
  }

  async delMemberRepo(id): Promise<any> {
    try {
      const delRes = await this.teamMembersModel
        .findOneAndUpdate(
          { id, del: false },
          { del: true },
          {
            new: true,
          },
        )
        .exec();
      console.log(delRes);
      if (delRes) {
        return { Message: 'Deleted!', delRes };
      }
      return { Message: 'Some Error occured' };
    } catch (ex) {
      throw ex;
    }
  }
}
