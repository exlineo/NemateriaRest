import { Document } from 'mongoose';
export interface AppartientModel extends Document {
    readonly fond: string;
    readonly groupe: Array<string>;
}
