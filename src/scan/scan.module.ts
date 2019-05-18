import { Module } from '@nestjs/common';
import { ScanController } from './scan.controller';
import { ScanService } from './scan.service';
import { scanProviders } from './scan.providers';

import { ExiftoolProcess } from 'node-exiftool';

import { DatabaseModule } from '../db/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [ScanController],
    providers: [
        ScanService,
        ExiftoolProcess,
        ...scanProviders,
    ],
})
export class ScanModule { }