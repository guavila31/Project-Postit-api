import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsPositive, isPositive, IsString, isString, MinLength, minLength } from "class-validator";

export class UpdateUserPayload {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString({message:'O nome deve ser uma String'})
  @MinLength(2)
  name: string;

  @ApiPropertyOptional()
  @IsOptional() 
  @IsPositive({message:'A idade deve ser positiva'})
  age: number;
}