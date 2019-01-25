import { Module } from '@nestjs/common';
import { JeuxController } from './jeux.controller';
import { JeuxService } from './jeux.service';
import { jeuxProviders } from './jeux.providers';
import { DatabaseModule } from '../db/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [JeuxController],
    components: [
        JeuxService,
        ...jeuxProviders,
    ],
})
export class JeuxModule { }