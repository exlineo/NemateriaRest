import { Document } from 'mongoose';
export interface NoticeModel extends Document {
    readonly date?:string | number;
    readonly prefix?:string;
    readonly metadonnees: {};
}