import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { CollectionModel } from './interfaces/collection.interface';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { COLLECTIONS_MODEL_PROVIDER } from '../constants';

@Injectable()
export class CollectionsService {
    constructor(@Inject(COLLECTIONS_MODEL_PROVIDER) private readonly collecModel: Model<CollectionModel>) { }

    /**
     * Créer une collection
     * @param createCollecDto forme de la collection à transmettre
     */
    async cree(createCollecDto: CreateCollectionDto): Promise<CollectionModel> {
        const createdCollection = new this.collecModel(createCollecDto);
        return await createdCollection.save();
    }
    /**
     * Insérer plusieurs collections en une seule fois (ça servira jamais mais bon...)
     * @param creeCollecsDto Un tableau de collections à insérer
     
    async creePlusieurs(creeCollecsDto: Array<CreateCollectionDto>): Promise<Array<CollectionModel>> {
        const createdCollection = new this.collecModel(creeCollecsDto);
        return await createdCollection.insertMany(creeCollecsDto);
    }
    */
    /**
     * Récupérer toutes les collections
     */
    async findAll(): Promise<CollectionModel[]> {
        return await this.collecModel.find().exec();
    }
    /**
     * Récupérer une collection en fonction de son id
     * @param id ID d'une collection
     * @type String | number | Object
     */
    async findUn(id): Promise<CollectionModel> {
        return await this.collecModel.findById(id).exec();
    }
    /**
     * Mettre à jour un document
     * @param id ID du document à mettre à jour
     * @type String | number | Object
     */
    async updateUn(collec): Promise<CollectionModel> {
        return await this.collecModel.findByIdAndUpdate(collec._id, collec).exec();
    }
    /**
     * Supprimer un élément en fonction de son ID
     * @param id ID du document à supprimer
     */
    async deleteUn(id): Promise<CollectionModel> {
        return await this.collecModel.findByIdAndDelete(id).exec();
    }
    /**
     * Otenir la liste des séries d'une collection données
     * @param id ID du document à supprimer
     */
    async findSeries(id): Promise<Array<Object>> {
        console.log("Les séries sont appelées");
        return await this.collecModel.find({ '_id' : id }).select('relations.serie -_id').exec();
    }
}