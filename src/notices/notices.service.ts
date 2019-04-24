import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { NoticeModel } from './interfaces/notice.interface';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { NOTICES_MODEL_PROVIDER } from '../constants';

@Injectable()
export class NoticesService {
    constructor(
        @Inject(NOTICES_MODEL_PROVIDER) private readonly noticeModel: Model<NoticeModel>) { }

    async create(createNoticeDto: CreateNoticeDto): Promise<NoticeModel> {
        const createdNotice = new this.noticeModel(createNoticeDto);
        return await createdNotice.save();
    }

    async findAll(): Promise<NoticeModel[]> {
        return await this.noticeModel.find().exec();
    }
}