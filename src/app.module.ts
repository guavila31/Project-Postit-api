import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserController } from './modules/user/controllers/user.controller';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    UserModule
  ]
})
export class AppModule {}