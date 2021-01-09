import * as mongoose from 'mongoose';

export const SetSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true,
    },
    alias: {
        type: String,
        required: true,
    },
    fond: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        required: false,
    },
    createur: {
        type: String,
        required: false,
    },
    gestionnaire: {
        type: String,
        required: false,
    },
    documents: {
        type: Array,
        required: true,
    },
});