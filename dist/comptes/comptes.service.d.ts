import { Model } from 'mongoose';
import { JwtService } from '../systeme/jwt.service';
import { CompteModel } from './interfaces/compte.interface';
export declare class ComptesService {
    private readonly compteModel;
    private readonly jwtService;
    compte: CompteModel;
    constructor(compteModel: Model<CompteModel>, jwtService: JwtService);
    verifie(id: any, pass: any): Promise<any>;
    creeCompte(comptDto: any): Promise<CompteModel>;
    updateUn(c: any): Promise<CompteModel>;
    deleteUn(id: any): Promise<CompteModel>;
}
