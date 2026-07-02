import {
  IsString,
  IsNotEmpty,
  IsNumber,
  Min,
  Max,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  name: string | undefined;

  @IsString()
  @IsNotEmpty()
  code: string | undefined;

  @IsString()
  @IsNotEmpty()
  instructor: string | undefined;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(6)
  credits: number | undefined;

  @IsOptional()
  @IsString()
  description?: string;
}
