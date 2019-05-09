import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { NoticeModel } from './interfaces/notice.interface';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { NOTICES_MODEL_PROVIDER } from '../constants';

@Injectable()
export class NoticesService {
    constructor(
        @Inject(NOTICES_MODEL_PROVIDER) private readonly noticeModel: Model<NoticeModel>) { }

    async cree(createNoticeDto: CreateNoticeDto): Promise<NoticeModel> {
        const createdNotice = new this.noticeModel(createNoticeDto);
        return await createdNotice.save();
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
    async findReq(req): Promise<NoticeModel[]> {
        return await this.noticeModel.find(req).exec();
    }
    /**
     * Trouver toutes les notices
     */
    async findAll(): Promise<NoticeModel[]> {
        return await this.noticeModel.find().exec();
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
     * 
     * @param id ID de la notice à supprimer
     */
    async deleteUn(id){
        return await this.noticeModel.deleteOne(id).exec();
    }
}