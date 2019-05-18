import { Module } from '@nestjs/common';
import { MapsController } from './maps.controller';
import { MapsService } from './maps.service';
import { mapsProviders } from './maps.providers';
import { DatabaseModule } from '../db/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [MapsController],
    providers: [
        MapsService,
        ...mapsProviders,
    ],
})
export class MapsModule { }