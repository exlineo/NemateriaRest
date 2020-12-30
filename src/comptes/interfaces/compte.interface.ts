import { Document } from 'mongoose';
export interface CompteModel extends Document {
    readonly _id: any;
    readonly nom: string;
    readonly compte: string;
    readonly mdp: string;
    readonly description:string;
    readonly email:string;
    readonly statut:number;
}