import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserDto {
  @MaxLength(25)
  @MinLength(3)
  @IsNotEmpty()
  @IsString()
  name: string;

  @MinLength(5)
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsInt()
  pincode: number;

  isActive: boolean;
}
