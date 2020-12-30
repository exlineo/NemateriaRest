import { Model } from 'mongoose';
import { NoticeModel } from './interfaces/notice.interface';
import { CreateNoticeDto } from './dto/create-notice.dto';
export declare class NoticesService {
    private readonly noticeModel;
    constructor(noticeModel: Model<NoticeModel>);
    cree(createNoticeDto: CreateNoticeDto): Promise<NoticeModel>;
    findUn(id: any): Promise<any>;
    findCollection(id: any): Promise<NoticeModel[]>;
    findAll(): Promise<NoticeModel[]>;
    countAll(): Promise<any>;
    countCollec(id: any): Promise<any>;
    updateUn(id: any, n: any): Promise<any>;
    deleteUn(id: any): Promise<any>;
}
