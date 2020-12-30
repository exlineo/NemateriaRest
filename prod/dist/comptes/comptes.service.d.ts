import { Model } from 'mongoose';
import { CompteModel } from './interfaces/compte.interface';
export declare class ComptesService {
    private readonly compteModel;
    constructor(compteModel: Model<CompteModel>);
}
