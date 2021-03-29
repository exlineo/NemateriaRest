import { JwtService } from '../systeme/jwt.service';
import { ComptesService } from './comptes.service';
import { CompteDto } from './dto/create-compte.dto';
export declare class ComptesController {
    private readonly compteService;
    private readonly jwtService;
    constructor(compteService: ComptesService, jwtService: JwtService);
    id(id: any, pass: any): Promise<any>;
    idErreur(): Promise<string>;
    creeFiltre(comptDto: CompteDto): Promise<void>;
    update(comptDto: CompteDto): Promise<void>;
    suppr(id: string): Promise<void>;
}
