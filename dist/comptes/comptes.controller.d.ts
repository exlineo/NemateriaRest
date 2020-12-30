import { ComptesService } from './comptes.service';
export declare class ComptesController {
    private readonly compteService;
    constructor(compteService: ComptesService);
    find(): Promise<any>;
}
