export class CreateMapDto {
    readonly _id: string;
    readonly titre: string;
    readonly alias: string;
    readonly description: string;
    readonly type: string;
    readonly createur: string;
    readonly fond:string;
    readonly langue: string;
    readonly groupe?: Array<string>;
    readonly notices?:Array<string> | Array<number>;
    readonly series?:Array<string>;
}