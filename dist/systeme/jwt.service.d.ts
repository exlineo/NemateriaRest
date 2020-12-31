import { Model } from 'mongoose';
import { CompteModel } from '../comptes/interfaces/compte.interface';
export declare class JwtService {
    private readonly compteModel;
    token: any;
    constructor(compteModel: Model<CompteModel>);
    creeToken(email: any, statut: any): Promise<void>;
}
