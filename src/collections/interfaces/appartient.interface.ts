import { Document } from 'mongoose';

export interface AppartientModel extends Document {
    readonly fonds:string;
}
// {fond:"Quercy", groupe:["Mémoire de la grande guerre"]}