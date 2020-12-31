import { JwtService } from '../systeme/jwt.service';
import { ComptesService } from './comptes.service';
export declare class ComptesController {
    private readonly compteService;
    private readonly jwtService;
    constructor(compteService: ComptesService, jwtService: JwtService);
    id(id: any, pass: any): Promise<any>;
    idErreur(): Promise<string>;
}
