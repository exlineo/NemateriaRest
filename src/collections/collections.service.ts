import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { CollectionModel } from './interfaces/collection.interface';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { COLLECTIONS_MODEL_PROVIDER } from '../constants';

@Injectable()
export class CollectionsService {
    constructor(
        @Inject(COLLECTIONS_MODEL_PROVIDER) private readonly collecModel: Model<CollectionModel>) { }

    async create(createCollecDto: CreateCollectionDto): Promise<CollectionModel> {
        const createdCollection = new this.collecModel(createCollecDto);
        return await createdCollection.save();
    }

    async findAll(): Promise<CollectionModel[]> {
        return await this.collecModel.find().exec();
    }
}