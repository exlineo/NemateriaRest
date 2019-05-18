import { Module } from '@nestjs/common';
import { CollectionsController } from './collections.controller';
import { CollectionsService } from './collections.service';
import { collectionsProviders } from './collections.providers';
import { DatabaseModule } from '../db/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [CollectionsController],
    providers: [
        CollectionsService,
        ...collectionsProviders,
    ],
})
export class CollectionsModule { }