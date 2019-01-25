import { Module } from '@nestjs/common';
import { NoticesController } from './notices.controller';
import { NoticesService } from './notices.service';
import { noticesProviders } from './notices.providers';
import { DatabaseModule } from 'db/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [NoticesController],
    components: [
        NoticesService,
        ...noticesProviders,
    ],
})
export class NoticesModule { }