import { Document } from 'mongoose';
export interface SetModel extends Document {
    readonly _id: any;
    readonly titre: string;
    readonly alias: string;
    readonly fond: string;
    readonly description?: string;
    readonly date?: string | number;
    readonly createur?: string;
    readonly gestionnaire?: string;
    readonly documents: Array<any>;
}