import { Model } from 'mongoose';
import { SetModel } from './interfaces/set.interface';
import { CreateSetDto } from './dto/create-set.dto';
export declare class SetsService {
    private readonly setModel;
    constructor(setModel: Model<SetModel>);
    create(createSetDto: CreateSetDto): Promise<SetModel>;
    findAll(): Promise<SetModel[]>;
    findUn(id: any): Promise<SetModel>;
    updateUn(id: any, set: any): Promise<SetModel>;
    deleteUn(id: any): Promise<SetModel>;
}
