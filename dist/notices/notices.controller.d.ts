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
    cree(CreateNoticeDto: CreateNoticeDto): Promise<NoticeModel>;
    creeMultiples(multiple: boolean, ArrayDTO: Array<CreateNoticeDto>): Promise<any>;
    updateUn(id: any, n: any): Promise<any>;
    deleteUn(id: any): Promise<any>;
}
