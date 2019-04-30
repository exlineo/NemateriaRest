import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { ExiftoolProcess } from 'node-exiftool';
import { SCAN_ADR } from '../config';

import { ScanModel } from './interfaces/scan.interface';
import { CreateScanDto } from './dto/scan.dto';
import { SCAN_MODEL_PROVIDER } from '../constants';

@Injectable()
export class ScanService {
    exifOpen;
    metas;
    constructor(@Inject(SCAN_MODEL_PROVIDER) private readonly scanModel: Model<ScanModel>, private exif:ExiftoolProcess) {
        console.log(this.exif);
        // this.scan();
    }
    /**
     * Scanner la liste des dossiers
     */
    async scan(){
        return this.exif.open()
        // read directory
        .then(() => this.exif.readMetadata(SCAN_ADR, ['-File:all']))
        .then(console.log, console.error)
        .then(() => this.exif.close())
        .catch(console.error)
    }

    async scanDir(dir){
        console.log(SCAN_ADR, dir);
        // return await 
        // read directory
        // .then(() => {
        //     return this.exif.readMetadata(SCAN_ADR+dir, ['-File:all'])
        // })
        // .then(
        //     data => {
        //         console.log(data);
        //         return data;
        //     }, console.error)
        // .then(() => this.exif.close())
        // .catch(console.error)
    }

    async openDir(dir){
        await this.exif.open()
        .then(() => this.readMetadata(dir))
        .then(() => this.exif.close())
        .catch(console.error);

        return this.metas;
        
        // return new Promise(( resolve, reject ) => {
            // return await this.exif.open()
            // .then((open)=>{
            //     return open;
            // });
            // .then(await this.readMetadata(dir))
            // .then(() => this.exif.close())
            // .catch(console.error);;
        // });
        // await 
        // .then((d) => {
        //     // return JSON.parse(d);
        //     return this.readMetadata(dir)
        // });
    }

    async readMetadata(dir):Promise<any>{
        await this.exif.readMetadata(SCAN_ADR+dir, ['-File:all'])
        .then(data => {
            this.metas = data;
        })
    }
}