import { Model } from 'mongoose';
import { FiltreDto } from './dto/filtre.dto';
import { FiltreModel } from './interfaces/filtre.interface';
export declare class FiltresService {
    private readonly filtreModel;
    constructor(filtreModel: Model<FiltreModel>);
    findAll(): Promise<Array<FiltreModel>>;
    findUn(id: any): Promise<FiltreModel>;
    cree(creeFiltreDto: FiltreDto): Promise<FiltreModel>;
    updateUn(filtre: any): Promise<FiltreModel>;
    deleteUn(id: any): Promise<FiltreModel>;
}
