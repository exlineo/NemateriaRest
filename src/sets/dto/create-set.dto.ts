import { ObjectId } from "mongoose";
export class CreateSetDto {
    _id: ObjectId;
    readonly titre:string;
    readonly alias:string;
    readonly fond:string;
    readonly description?:string;
    readonly date?:string | number;
    readonly createur?:string;
    readonly gestionnaire?:string;
    readonly documents:Array<any>
}