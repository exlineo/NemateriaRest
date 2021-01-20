import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { NoticeModel } from './interfaces/notice.interface';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { NOTICES_MODEL_PROVIDER } from '../constants';

@Injectable()
export class NoticesService {
    constructor(
        @Inject(NOTICES_MODEL_PROVIDER) private readonly noticeModel: Model<NoticeModel>) { }

    /**
     * Insérer une notice dans Mongo
     * @param createNoticeDto Notice à insérer
     */
    async cree(createNoticeDto: CreateNoticeDto): Promise<NoticeModel> {
        const createdNotice = new this.noticeModel(createNoticeDto);
        return await createdNotice.save();
    }
    /**
     * Tableau de notices à insérer
     * @param tabDTO Tableau de notices
     */
    async creeMultiples(tabDTO: Array<CreateNoticeDto>): Promise<any> {
        const addNotices = new this.noticeModel(tabDTO);
        return await addNotices.collection.insertMany(tabDTO)
        .then(r => r)
        .catch(e => console.log(e));
    }
    /**
     * Rechercher des données en fonction de critères transmis
     * @param req Argument transmis pour faire une recherche
     */
    async findUn(id): Promise<any> {
        return await this.noticeModel.find(id).exec();
    }
    /**
     * Rechercher des données en fonction de critères transmis
     * @param req Argument transmis pour faire une recherche
     */
    async findCollection(id): Promise<NoticeModel[]> {
        console.log("Id collection", id);
        return await this.noticeModel.find({ 'relations.idCollection' : id }).exec();
    }
    /**
     * Rechercher des notices à partir d'un tableau d'IDs
     * @param req Argument transmis pour faire une recherche
     */
    async findNoticesByCollec(ids): Promise<NoticeModel[]> {
        console.log("Id collection", ids);
        return await this.noticeModel.find().where('_id').in(ids).exec();
    }
    /**
     * Trouver toutes les notices
     */
    async findAll(): Promise<Array<NoticeModel>> {
        return [];
        // return await this.noticeModel.find().exec();
    }
    /**
     * Donner le nombre global de notices disponibles
     */
    async countAll(){
        return await this.noticeModel.find().estimatedDocumentCount();
    }
    /**
     * Donner le nombre global de notices disponibles
     */
    async countCollec(id){
        return await this.noticeModel.find({ 'relations.idCollection' : id }).estimatedDocumentCount();
    }
    /**
     * 
     * @param id ID de la notice à mettre à jour
     * @param n Les données de la notice modifiée
     */
    async updateUn(id, n){
        return await this.noticeModel.updateOne(id, n).exec();
    }
    /**
     * Supprimer une notice
     * @param id ID de la notice à supprimer
     */
    async deleteUn(id){
        return await this.noticeModel.findByIdAndDelete(id).exec();
    }
}