import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TeamMembersDocument = TeamMembers & Document;

@Schema({
  collection: 'teamMembers',
  // timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  strict: false,
})
export class TeamMembers {
  @Prop({
    unique: true,
  })
  id: string;

  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  role: string;

  @Prop()
  del: boolean;

  @Prop()
  createdAt: number;

  @Prop()
  updatedAt: number;
}

export const TeamMembersEntity = {
  name: TeamMembers.name,
  schema: SchemaFactory.createForClass(TeamMembers),
};
