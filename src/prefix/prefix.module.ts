import { Module } from '@nestjs/common';
import { PrefixController } from './prefix.controller';
import { PrefixService } from './prefix.service';
import { prefixProviders } from './prefix.providers';
import { DatabaseModule } from '../db/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [PrefixController],
    providers: [
        PrefixService,
        ...prefixProviders,
    ],
})
export class PrefixModule { }