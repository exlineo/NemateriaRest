import { Module } from '@nestjs/common';
import { ScanController } from './scan.controller';
import { ScanService } from './scan.service';
import { ScanProviders } from './scan.providers';
import { DatabaseModule } from 'db/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [ScanController],
    components: [
        ScanService,
        ...ScanProviders,
    ],
})
export class ScanModule { }