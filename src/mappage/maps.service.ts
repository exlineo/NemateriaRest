import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { MapModel } from './interfaces/map.interface';
import { CreateMapDto } from './dto/create-map.dto';
import { MAPS_MODEL_PROVIDER } from '../constants';

@Injectable()
export class MapsService {
    constructor(@Inject(MAPS_MODEL_PROVIDER) private readonly mapModel: Model<MapModel>) { }

    /**
     * Créer un mappage
     * @param creeMapDto forme de la set à transmettre
     */
    async create(creeMapDto: CreateMapDto): Promise<MapModel> {
        const mapCree = new this.mapModel(creeMapDto);
        return await mapCree.save();
    }
    /**
     * Récupérer toutes les collections
     */
    async findAll(): Promise<MapModel[]> {
        return await this.mapModel.find().exec();
    }
    /**
     * Récupérer une collection en fonction de son id
     * @param id ID d'une collection
     * @type String | number | Object
     */
    async findUn(id): Promise<MapModel> {
        return await this.mapModel.findById(id).exec();
    }
    /**
     * Mettre à jour un document
     * @param id ID du document à mettre à jour
     * @type String | number | Object
     */
    async updateUn(id, set): Promise<MapModel> {
        return await this.mapModel.findByIdAndUpdate(id, set).exec();
    }
    /**
     * Supprimer un élément en fonction de son ID
     * @param id ID du document à supprimer
     */
    async deleteUn(id): Promise<MapModel> {
        return await this.mapModel.findByIdAndDelete(id).exec();
    }

}