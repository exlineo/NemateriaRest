import { Model } from 'mongoose';
import { SetModel } from './interfaces/set.interface';
export declare class SetsService {
    private readonly setModel;
    constructor(setModel: Model<SetModel>);
    cree(createSetDto: any): Promise<SetModel>;
    findAll(): Promise<SetModel[]>;
    findUn(id: any): Promise<SetModel>;
    updateUn(id: any, set: any): Promise<SetModel>;
    deleteUn(id: any): Promise<SetModel>;
}
