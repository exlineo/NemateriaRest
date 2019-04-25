import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CreateScanDto } from './dto/scan.dto';
import { ScanService } from './scan.service';
import { ScanModel } from './interfaces/scan.interface';

@Controller('scans')
export class ScanController {
    constructor(private readonly scanService: ScanService) { }

    @Get()
    async scanDirMeta() {
        return await this.scanService.scan();
    }

    @Get(':dir')
    async findUn(@Param('dir') dir:string, @Query() q:object):Promise<any> {
        console.log(":dir détecté", dir, q); // dir > le dossier à scanner, q > des variables passées
        return await this.scanService.openDir(dir);
    }

    @Post()
    async findDir(@Body() body): Promise<any> {
        console.log("Post", body)
        this.scanService.scanDir(body);
    }
}