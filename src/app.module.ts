import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Serveur REST
import { CollectionsModule } from 'collections/collections.module';
import { NoticesModule } from 'notices/notices.module';
// Module WebSocket
import { WSModule } from 'ws/ws.module';

@Module({
  imports: [CollectionsModule, NoticesModule, WSModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
