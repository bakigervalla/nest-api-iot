import { Module } from '@nestjs/common';

import { ConfigurationController } from './configuration.controller';
import { ConfigurationService } from './configuration.service';

@Module({
  imports: [],
  controllers: [ConfigurationController],
  providers: [ConfigurationService],
})
export class ConfigurationsModule {}
