import * as mongoose from 'mongoose';

/**
 * Schema pour le suivi et l'injection de notices dans la base Mongo.
 * Le metadonnees sont d'une type any pour permettre une injection libre
 * cf. https://mongoosejs.com/docs/schematypes.html#mixed
 */
export const NoticeSchema = new mongoose.Schema({
    date:{
        type:Date,
        required:false
    },
    metadonnees:{
        type:Array,
        required:true
    }
});