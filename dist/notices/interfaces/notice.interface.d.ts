import { Document } from 'mongoose';
export interface NoticeModel extends Document {
    readonly title: string;
    readonly content: string;
    readonly userId: string;
}
