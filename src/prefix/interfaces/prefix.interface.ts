import { Document } from 'mongoose';

export interface PrefixModel extends Document {
    readonly alias?:string;
    readonly titre?:string;
}