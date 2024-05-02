// your-dto-name.dto.ts

import { IsNotEmpty, IsDateString } from 'class-validator';

export class rearingDto {
  @IsNotEmpty()
  box_id: string;

  @IsNotEmpty()
  @IsDateString()
  end_date: string;

  @IsNotEmpty()
  @IsDateString()
  rearing_date: string;

  @IsNotEmpty()
  weight: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  record_by: string;

  @IsNotEmpty()
  feed_freq: string;

  @IsNotEmpty()
  child_id: string;

  @IsNotEmpty()
  status: string;
}
