import { CreatePrefixDto } from './dto/create-prefix.dto';
import { PrefixService } from './prefix.service';
import { PrefixModel } from './interfaces/prefix.interface';
export declare class PrefixController {
    private readonly prefixServ;
    constructor(prefixServ: PrefixService);
    findPaquet(): Promise<any>;
    findCount(): Promise<number>;
    cree(CreatePrefixDto: CreatePrefixDto): Promise<PrefixModel>;
    creeMultiples(multiple: boolean, ArrayDTO: Array<CreatePrefixDto>): Promise<any>;
    updateUn(id: any, n: any): Promise<any>;
    deleteUn(id: any): Promise<any>;
}
