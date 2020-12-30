import * as mongoose from 'mongoose';

/**
 * Schema pour le suivi et l'injection de notices dans la base Mongo.
 * Le metadonnees sont d'une type any pour permettre une injection libre
 * cf. https://mongoosejs.com/docs/schematypes.html#mixed
 */
export const CompteSchema = new mongoose.Schema({
    _id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    nom: {
        type: String,
        required: false,
    },
    compte: {
        type: String,
        required: true,
    },
    mdp: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    statut: {
        type: Number,
        required: true,
    }
});