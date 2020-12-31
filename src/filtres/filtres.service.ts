import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { FILTRES_MODEL_PROVIDER } from '../constants';
import { FiltreDto } from './dto/filtre.dto';
import { FiltreModel } from './interfaces/filtre.interface';

@Injectable()
export class FiltresService {
    constructor(@Inject(FILTRES_MODEL_PROVIDER) private readonly filtreModel: Model<FiltreModel>) { }
    
    /**
     * Récupérer toutes les filtres
     */
    async findAll(): Promise<Array<FiltreModel>> {
        return await this.filtreModel.find().exec();
    }
    /**
     * Récupérer un filtre en fonction de son id
     * @param id ID du filtre
     * @type String | number
     */
    async findUn(id): Promise<FiltreModel> {
        return await this.filtreModel.findById(id).exec();
    }
    /**
     * Créer un filtre
     * @param creeFiltreDto forme du filtre à transmettre
     */
    async cree(creeFiltreDto: FiltreDto): Promise<FiltreModel> {
        console.log("Filtre DTO (service) : ", creeFiltreDto)
        const filtreCree = new this.filtreModel(creeFiltreDto);
        return await filtreCree.save();
    }
    /**
     * Mettre à jour un document
     * @param filtre ID du document à mettre à jour
     * @type FiltreModel
     */
    async updateUn(filtre): Promise<FiltreModel> {
        return await this.filtreModel.findByIdAndUpdate(filtre._id, filtre).exec();
    }
    /**
     * Supprimer un élément en fonction de son ID
     * @param id ID du document à supprimer
     */
    async deleteUn(id): Promise<FiltreModel> {
        console.log("Destruction d'un filtre", id);
        return await this.filtreModel.findByIdAndDelete(id).exec();
    }
}
