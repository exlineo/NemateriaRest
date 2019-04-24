export class CreateCollectionDto {
    readonly _id: string;
    readonly titre: string;
    readonly alias: string;
    readonly description: string;
    readonly type: string;
    readonly createur: string;
    readonly appartient: string;
    readonly langue: string;
}