import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { PrefixModel } from './interfaces/prefix.interface';
import { CreatePrefixDto } from './dto/create-prefix.dto';
import { PREFIX_MODEL_PROVIDER } from '../constants';

@Injectable()
export class PrefixService {
    constructor(
        @Inject(PREFIX_MODEL_PROVIDER) private readonly prefixModel: Model<PrefixModel>) { }

    /**
     * Insérer une prefix dans Mongo
     * @param createprefixDto prefix à insérer
     */
    async cree(createPrefixDto: CreatePrefixDto): Promise<PrefixModel> {
        const createdPrefix = new this.prefixModel(createPrefixDto);
        return await createdPrefix.save();
    }
    /**
     * Tableau de prefixs à insérer
     * @param tabDTO Tableau de prefixs
     */
    async creeMultiples(tabDTO: Array<CreatePrefixDto>): Promise<any> {
        const addPrefix = new this.prefixModel(tabDTO);
        return await addPrefix.collection.insertMany(tabDTO)
        .then(r => r)
        .catch(e => console.log(e));
    }
    /**
     * Rechercher des données en fonction de critères transmis
     * @param req Argument transmis pour faire une recherche
     */
    async findUn(id): Promise<any> {
        return await this.prefixModel.find(id).exec();
    }
    /**
     * Rechercher des données en fonction de critères transmis
     * @param req Argument transmis pour faire une recherche
     */
    async findCollection(id): Promise<PrefixModel[]> {
        console.log("Id collection", id);
        return await this.prefixModel.find({ 'relations.idCollection' : id }).exec();
    }
    /**
     * Rechercher des Prefix à partir d'un tableau d'IDs
     * @param req Argument transmis pour faire une recherche
     */
    async findPrefixsByCollec(ids): Promise<PrefixModel[]> {
        console.log("Ids des prefix d'une collection", ids);
        return await this.prefixModel.find().where('_id').in(ids).exec();
    }
    /**
     * Trouver toutes les Prefix
     */
    async findAll(): Promise<Array<PrefixModel>> {
        return await this.prefixModel.find().exec();
    }
    /**
     * Donner le nombre global de Prefix disponibles
     */
    async countAll(){
        return await this.prefixModel.find().estimatedDocumentCount();
    }
    /**
     * Donner le nombre global de prefixs disponibles
     */
    async countCollec(id){
        return await this.prefixModel.find({ 'relations.idCollection' : id }).estimatedDocumentCount();
    }
    /**
     * 
     * @param id ID de la prefix à mettre à jour
     * @param n Les données de la prefix modifiée
     */
    async updateUn(id, n){
        return await this.prefixModel.updateOne(id, n).exec();
    }
    /**
     * Supprimer une prefix
     * @param id ID de la prefix à supprimer
     */
    async deleteUn(id){
        return await this.prefixModel.findByIdAndDelete(id).exec();
    }
}