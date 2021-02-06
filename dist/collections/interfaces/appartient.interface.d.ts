import { Document } from 'mongoose';
export interface AppartientModel extends Document {
    readonly fonds: string;
}
