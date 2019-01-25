import { Model } from 'mongoose';
import { Component, Inject } from '@nestjs/common';

import { NoticeModel } from './interfaces/notice.interface';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { NOTICES_MODEL_PROVIDER } from '../constants';

@Component()
export class NoticesService {
    constructor(
        @Inject(NOTICES_MODEL_PROVIDER) private readonly postModel: Model<NoticeModel>) { }

    async create(createPostDto: CreateNoticeDto): Promise<NoticeModel> {
        const createdNotice = new this.postModel(createPostDto);
        return await createdNotice.save();
    }

    async findAll(): Promise<NoticeModel[]> {
        return await this.postModel.find().exec();
    }
}