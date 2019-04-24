import { Module } from '@nestjs/common';
import { ScanController } from './scan.controller';
import { ScanService } from './scan.service';
import { scanProviders } from './scan.providers';
import { DatabaseModule } from '../db/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [ScanController],
    providers: [
        ScanService,
        ...scanProviders,
    ],
})
export class ScanModule { }