import { Model } from 'mongoose';
import { CollectionModel } from './interfaces/collection.interface';
import { CreateCollectionDto } from './dto/create-collection.dto';
export declare class CollectionsService {
    private readonly collecModel;
    constructor(collecModel: Model<CollectionModel>);
    findAll(): Promise<CollectionModel[]>;
    findUn(id: any): Promise<CollectionModel>;
    cree(creeCollecDto: CreateCollectionDto): Promise<CollectionModel>;
    updateUn(collec: any): Promise<CollectionModel>;
    deleteUn(id: string): Promise<CollectionModel>;
    findSeries(id: any): Promise<Array<Object>>;
}
