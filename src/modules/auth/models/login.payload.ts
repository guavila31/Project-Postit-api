
import { ApiProperty } from "@nestjs/swagger";

export class LoginPayload {

  @ApiProperty()
  public email: string;

  @ApiProperty()
  public password: string;

} 