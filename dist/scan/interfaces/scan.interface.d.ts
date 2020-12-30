import { Document } from 'mongoose';
export interface ScanModel extends Document {
    readonly title: string;
    readonly content: string;
    readonly userId: string;
}
