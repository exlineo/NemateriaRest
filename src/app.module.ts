import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// Serveur REST
import { PostsModule } from 'posts/posts.module';
import { JeuxModule } from 'jeux/jeux.module';
// Module WebSocket
import { WSModule } from 'ws/ws.module';

@Module({
  imports: [PostsModule, JeuxModule, WSModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
