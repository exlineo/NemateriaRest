import { Document } from 'mongoose';
export interface CollectionModel extends Document {
    readonly _id: string;
    readonly titre: string;
    readonly alias: string;
    readonly description: string;
    readonly type: string;
    readonly createur: string;
    readonly fonds?: string;
    readonly date?: string | number;
    readonly langue?: string;
    readonly notices?: Array<string>;
    readonly series?: Array<string>;
}
