import { Document } from 'mongoose';

export interface Jeu extends Document {
    readonly titre: string;
    readonly contenu: string;
    readonly userId: string;
}