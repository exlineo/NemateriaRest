import { Module } from '@nestjs/common';
import { SetsController } from './sets.controller';
import { SetsService } from './sets.service';
import { setsProviders } from './sets.providers';
import { DatabaseModule } from '../db/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [SetsController],
    providers: [
        SetsService,
        ...setsProviders,
    ],
})
export class SetsModule { }