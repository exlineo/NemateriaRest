import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CollectionsModule } from './collections/collections.module';
import { NoticesModule } from './notices/notices.module';
import { WSModule } from './ws/ws.module';
import { ScanModule } from './scan/scan.module';
import { FiltresModule } from './filtres/filtres.module';
// Serveur REST
// Module WebSocket

@Module({
  imports: [CollectionsModule, NoticesModule, ScanModule, WSModule, FiltresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
