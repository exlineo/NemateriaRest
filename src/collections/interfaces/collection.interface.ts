import { Document } from 'mongoose';

export interface CollectionModel extends Document {
    readonly title: string;
    readonly content: string;
    readonly userId: string;
}