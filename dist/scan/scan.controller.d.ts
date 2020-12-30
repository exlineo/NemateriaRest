import { ScanService } from './scan.service';
export declare class ScanController {
    private readonly scanService;
    constructor(scanService: ScanService);
    listeDossiers(): Promise<unknown>;
    scanUnDir(dir: string, q: object): Promise<any>;
    scanUnFichier(fichier: string, q: object): Promise<any>;
}
