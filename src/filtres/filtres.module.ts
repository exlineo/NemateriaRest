import { Module } from '@nestjs/common';
import { FiltresController } from './filtres.controller';
import { FiltresService } from './filtres.service';
import { filtresProviders } from './filtres.providers';
import { DatabaseModule } from '../db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FiltresController],
  providers: [FiltresService, ...filtresProviders]
})
export class FiltresModule {}

