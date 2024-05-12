import { Module } from '@nestjs/common';
import { ConfigurationModule } from './config/app/configuration.module';
import { ConfigModule as DatabaseModule }  from './config/database/mysql/config.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
