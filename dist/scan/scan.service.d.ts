import { Model } from 'mongoose';
import { ExiftoolProcess } from 'node-exiftool';
import { ScanModel } from './interfaces/scan.interface';
export declare class ScanService {
    private readonly scanModel;
    private exif;
    exifOpen: any;
    metas: any;
    dossiers: any;
    constructor(scanModel: Model<ScanModel>, exif: ExiftoolProcess);
    scan(): Promise<unknown>;
    scanDir(dir: any): Promise<any>;
    readDir(dir: any): Promise<any>;
    scanFichier(fichier: any): Promise<any>;
    readFichier(fichier: any): Promise<any>;
}
