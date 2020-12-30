import { Module } from '@nestjs/common';
import { ComptesController } from './comptes.controller';
import { ComptesService } from './comptes.service';
import { comptesProviders } from './comptes.providers';

@Module({
  controllers: [ComptesController],
  providers: [ComptesService, ...comptesProviders]
})
export class ComptesModule {}
