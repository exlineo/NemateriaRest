import { Document } from 'mongoose';

export interface FiltreModel extends Document {
    readonly _id: string;
    readonly titre: string;
    readonly alias: string;
    readonly description: string;
    readonly createur: string;
    readonly donnees:Array<string>;
    readonly prefix:Array<string>;
}