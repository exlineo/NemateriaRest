import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CollectionsModule } from './collections/collections.module';
import { SetsModule } from './sets/sets.module';
import { NoticesModule } from './notices/notices.module';
import { FiltresModule } from './filtres/filtres.module';
import { MapsModule } from './mappage/maps.module';
import { ScanModule } from './scan/scan.module';
import { ComptesModule } from './comptes/comptes.module';
// Serveur REST
// Module WebSocket

@Module({
  imports: [CollectionsModule, SetsModule, NoticesModule, ScanModule, FiltresModule, MapsModule, ComptesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
