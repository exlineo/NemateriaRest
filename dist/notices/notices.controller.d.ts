import { CreateNoticeDto } from './dto/create-notice.dto';
import { NoticesService } from './notices.service';
import { NoticeModel } from './interfaces/notice.interface';
export declare class NoticesController {
    private readonly noticesService;
    constructor(noticesService: NoticesService);
    findPaquet(): Promise<any>;
    findCollection(c: any): Promise<any>;
    findUn(id: any): Promise<NoticeModel>;
    findCount(): Promise<number>;
    findCollecCount(c: any): Promise<number>;
    cree(CreateNoticeDto: CreateNoticeDto): Promise<void>;
    updateUn(id: any, n: any): Promise<void>;
    deleteUn(id: any): Promise<void>;
}
