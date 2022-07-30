import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { enviroment } from './environment/environment';
import { UserController } from './modules/user/controllers/user.controller';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'test.db',
      autoLoadEntities: true,
      synchronize: true,
      logging: enviroment.DATABASE_LOGGING === 'true',
    }),
  ]
})
export class AppModule {}