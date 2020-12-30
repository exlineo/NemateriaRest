import { FiltresService } from './filtres.service';
import { FiltreDto } from './dto/filtre.dto';
export declare class FiltresController {
    private readonly filtresServ;
    constructor(filtresServ: FiltresService);
    findAll(): Promise<Array<any>>;
    findUn(id: any): Promise<any>;
    creeFiltre(filtreDto: FiltreDto): Promise<import("./interfaces/filtre.interface").FiltreModel>;
    update(upFiltreDto: FiltreDto): Promise<import("./interfaces/filtre.interface").FiltreModel>;
    remove(id: string): Promise<import("./interfaces/filtre.interface").FiltreModel>;
}
