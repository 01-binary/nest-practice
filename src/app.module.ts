import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthCheckModule } from './health-check/health-check.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [HealthCheckModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
