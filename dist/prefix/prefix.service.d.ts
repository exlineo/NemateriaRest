import { Model } from 'mongoose';
import { PrefixModel } from './interfaces/prefix.interface';
import { CreatePrefixDto } from './dto/create-prefix.dto';
export declare class PrefixService {
    private readonly prefixModel;
    constructor(prefixModel: Model<PrefixModel>);
    cree(createPrefixDto: CreatePrefixDto): Promise<PrefixModel>;
    creeMultiples(tabDTO: Array<CreatePrefixDto>): Promise<any>;
    findUn(id: any): Promise<any>;
    findCollection(id: any): Promise<PrefixModel[]>;
    findPrefixsByCollec(ids: any): Promise<PrefixModel[]>;
    findAll(): Promise<Array<PrefixModel>>;
    countAll(): Promise<any>;
    countCollec(id: any): Promise<any>;
    updateUn(id: any, n: any): Promise<any>;
    deleteUn(id: any): Promise<any>;
}
