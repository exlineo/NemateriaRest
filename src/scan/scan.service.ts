import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { ExiftoolProcess } from 'node-exiftool';
import { SCAN_ADR } from '../config';

import { ScanModel } from './interfaces/scan.interface';
import { CreateScanDto } from './dto/scan.dto';
import { SCAN_MODEL_PROVIDER } from '../constants';

import * as fs from 'fs';
import * as path from 'path';
import { async } from 'rxjs/internal/scheduler/async';

// const { readdir, stat } = require("fs").promises;
/// const { join } = require("path");
// const { join } = require("path");

@Injectable()
export class ScanService {
    exifOpen;
    metas;
    dossiers;

    constructor(@Inject(SCAN_MODEL_PROVIDER) private readonly scanModel: Model<ScanModel>, private exif: ExiftoolProcess) {
        // console.log(this.exif);
    }
    async scan() {
        this.dossiers = [];
        console.log("Scan des dossiers lancé");
        return new Promise((resolve, reject)=>{
            fs.readdir(SCAN_ADR, (err, dir) => {
                if (err) {
                    reject(err); 
                } else {
                    resolve(dir);
                }
            });
        });
    }
    /**
     * Scanner des métadonnées de fichiers dans un dossier donné
     * Ouverture, lecture et fermeture du dossier scanné
     * @param dir dossier à ouvrir pour scanner des metadonnées
     */
    async scanDir(dir) {
        dir = dir.replace('../', ''); // Petite sécurité sur la chaîne pour éviter des tentatives hasardeuses
        await this.exif.open()
            .then(() => this.readDir(dir))
            .then(() => this.exif.close())
            .catch(console.error);

        return this.metas;
    }
    /**
     * Lecture de métadonnées dans un dossier donnée
     * @param dir Dossier de scan
     */
    async readDir(dir): Promise<any> {
        await this.exif.readMetadata(SCAN_ADR + dir, ['-File:all'])
            .then(data => {
                this.metas = data;
            })
    }
    /**
     * Ouverture, lecture et fermeture d'un fichier dont les métadonnées seront extraites
     * @param fichier Le fichier qui doit être lu
     */
    async scanFichier(fichier) {
        fichier = fichier.replace('../', ''); // Petite sécurité sur la chaîne pour éviter des tentatives hasardeuses
        await this.exif.open()
            .then(() => this.readFIchier(fichier))
            .then(() => this.exif.close())
            .catch(console.error);

        return this.metas;
    }
    /**
     * Lire les métadonnées d'un fichier
     * @param fichier Fichier dont les métadonnées doivent être extraites
     */
    async readFIchier(fichier): Promise<any> {
        await this.exif.readMetadata(fichier, ['-File:all'])
            .then(data => {
                this.metas = data;
            })
    }
}