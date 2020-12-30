import { Module } from '@nestjs/common';
import { ComptesController } from './comptes.controller';
import { ComptesService } from './comptes.service';
import { comptesProviders } from './comptes.providers';
import { DatabaseModule } from '../db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ComptesController],
  providers: [ComptesService, ...comptesProviders]
})
export class ComptesModule {}
