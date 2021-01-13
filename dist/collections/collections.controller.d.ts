import { CreateCollectionDto } from './dto/create-collection.dto';
import { CollectionsService } from './collections.service';
import { CollectionModel } from './interfaces/collection.interface';
export declare class CollectionsController {
    private readonly colServ;
    constructor(colServ: CollectionsService);
    findAll(): Promise<Array<CollectionModel>>;
    findUn(id: any): Promise<CollectionModel>;
    findSeries(id: any): Promise<object>;
    create(collecDto: CreateCollectionDto): Promise<void>;
    update(upCollecDto: CreateCollectionDto): Promise<CollectionModel>;
    remove(id: string): Promise<CollectionModel>;
}
