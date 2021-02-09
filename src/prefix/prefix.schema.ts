import * as mongoose from 'mongoose';

/**
 * Schema pour le suivi et l'injection de notices dans la base Mongo.
 * Le metadonnees sont d'une type any pour permettre une injection libre
 * cf. https://mongoosejs.com/docs/schematypes.html#mixed
 */
export const PrefixSchema = new mongoose.Schema({
    alias:{
        type:String,
        required:false
    },
    titre:{
        type:String,
        required:false
    }
});