import { Model } from 'mongoose';
import { MapModel } from './interfaces/map.interface';
import { CreateMapDto } from './dto/create-map.dto';
export declare class MapsService {
    private readonly mapModel;
    constructor(mapModel: Model<MapModel>);
    create(creeMapDto: CreateMapDto): Promise<MapModel>;
    findAll(): Promise<MapModel[]>;
    findUn(id: any): Promise<MapModel>;
    updateUn(id: any, set: any): Promise<MapModel>;
    deleteUn(id: any): Promise<MapModel>;
}
