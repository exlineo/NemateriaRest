import { Model, Schema } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { SetModel } from './interfaces/set.interface';
import { CreateSetDto } from './dto/create-set.dto';
import { SETS_MODEL_PROVIDER } from '../constants';

@Injectable()
export class SetsService {
    constructor(@Inject(SETS_MODEL_PROVIDER) private readonly setModel: Model<SetModel>) { }

    /**
     * Créer une collection
     * @param createSetDto forme de la set à transmettre
     */
    async cree(createSetDto: CreateSetDto): Promise<SetModel> {
        let createdSet = new this.setModel(createSetDto);
        // await createdSet.findById();
        return await createdSet.save();
    }
    /**
     * Récupérer toutes les collections
     */
    async findAll(): Promise<SetModel[]> {
        return await this.setModel.find().exec();
    }
    /**
     * Récupérer une collection en fonction de son id
     * @param id ID d'une collection
     * @type String | number | Object
     */
    async findUn(id): Promise<SetModel> {
        return await this.setModel.findById(id).exec();
    }
    /**
     * Mettre à jour un document
     * @param id ID du document à mettre à jour
     * @type String | number | Object
     */
    async updateUn(id, set): Promise<SetModel> {
        console.log("Mise à jour de ", id, set);
        return await this.setModel.findByIdAndUpdate(id, set).exec();
    }
    /**
     * Supprimer un élément en fonction de son ID
     * @param id ID du document à supprimer
     */
    async deleteUn(id): Promise<SetModel> {
        return await this.setModel.findByIdAndDelete(id).exec();
    }

}