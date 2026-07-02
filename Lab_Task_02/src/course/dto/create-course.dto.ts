import {
  IsString,
  IsNotEmpty,
  IsNumber,
  MinLength,
  MaxLength,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  Instructor: string;

  @Type(() => Number)
  @IsNumber()
  @MinLength(1)
  @MaxLength(6)
  credits: number;

  @IsOptional()
  @IsString()
  description: string;
}
