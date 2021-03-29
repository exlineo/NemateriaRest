import { Document } from 'mongoose';
export interface CompteModel extends Document {
    nom: string;
    compte: string;
    mdp?: string;
    description:string;
    email:string;
    statut:number;
}