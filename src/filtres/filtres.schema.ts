import * as mongoose from 'mongoose';

export const FiltresSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true,
    },
    alias: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
    createur: {
        type: String,
        required: true,
    },
    donnees: {
        type: Array,
        required: true,
    }
});