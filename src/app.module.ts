import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CollectionsModule } from './collections/collections.module';
import { SetsModule } from './sets/sets.module';
import { NoticesModule } from './notices/notices.module';
import { FiltresModule } from './filtres/filtres.module';

import { WSModule } from './ws/ws.module';
import { ScanModule } from './scan/scan.module';
// Serveur REST
// Module WebSocket

@Module({
  imports: [CollectionsModule, SetsModule, NoticesModule, ScanModule, WSModule, FiltresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
