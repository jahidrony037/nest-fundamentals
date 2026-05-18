import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateSongDto {
  @IsNumber()
  id;
  @IsString()
  @IsNotEmpty()
  readonly title;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  readonly artist;

  @IsDateString()
  readonly releaseDate: Date;

  @IsMilitaryTime()
  readonly duration: Date;
}
