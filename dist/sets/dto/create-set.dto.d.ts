import { ObjectId } from "mongoose";
export declare class CreateSetDto {
    readonly _id?: ObjectId;
    readonly titre: string;
    readonly alias: string;
    readonly fonds?: string;
    readonly description?: string;
    readonly date?: string | number;
    readonly createur?: string;
    readonly gestionnaire?: string;
    readonly documents: Array<any>;
    readonly prefix: Array<string>;
}
