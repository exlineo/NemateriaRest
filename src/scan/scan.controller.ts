import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CreateScanDto } from './dto/scan.dto';
import { ScanService } from './scan.service';
import { ScanModel } from './interfaces/scan.interface';

@Controller('scans')
export class ScanController {
    constructor(private readonly scanService: ScanService) { }

    @Get()
    async scanDirMeta() {
        // return await this.scanService.scan();
        return 'Merci de préciser un fichier';
    }
    /**
     * 
     * @param dir 
     * @param q 
     */
    @Get(':dir')
    async scanUnDir(@Param('dir') dir:string, @Query() q:object):Promise<any> {
        console.log(":dir détecté", dir, q); // dir > le dossier à scanner, q > des variables passées
        return await this.scanService.scanDir(dir);
    }
    
    @Get(':fichier')
    async scanUnFichier(@Param('fichier') fichier:string, @Query() q:object):Promise<any> {
        console.log(":fichier détecté", fichier, q); // fichier > le fichier à scanner, q > des variables passées
        return await this.scanService.scanFichier(fichier);
    }
}