import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsEmail, IsOptional, Matches } from 'class-validator';

export class AddTeamMemberDto {
  @ApiProperty({
    description: 'First Name',
  })
  first_name: string;

  @ApiProperty({
    description: 'Last Name',
  })
  last_name: string;

  @ApiProperty({
    description: 'Phone number',
  })
  @Matches(/^\+?[1-9]\d{1,14}$/, {
    message: 'Phone number must be a valid E.164 format',
  })
  phone: string;

  @ApiProperty({
    description: 'Email id',
  })
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;

  @ApiProperty({
    description: 'Role',
  })
  role: string;
}

export class UpdateTeamMemberDto extends PartialType(AddTeamMemberDto) {
  @ApiPropertyOptional({
    description: 'First Name',
  })
  @IsOptional()
  first_name?: string;

  @ApiPropertyOptional({
    description: 'Last Name',
  })
  @IsOptional()
  last_name?: string;

  @ApiPropertyOptional({
    description: 'Phone number',
  })
  @IsOptional()
  @Matches(/^\+?[1-9]\d{1,14}$/, {
    message: 'Phone number must be a valid E.164 format',
  })
  phone?: string;

  @ApiPropertyOptional({
    description: 'Email id',
  })
  @IsOptional()
  @IsEmail({}, { message: 'Email must be a valid email address' })
  email?: string;

  @ApiPropertyOptional({
    description: 'Role',
  })
  @IsOptional()
  role?: string;
}
