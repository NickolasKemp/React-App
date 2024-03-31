import { IsOptional, IsString } from 'class-validator';


export class ListDto {
  @IsString()
  @IsOptional()
  label: string;

  @IsString()
  @IsOptional()
  createdAt?: string;

}