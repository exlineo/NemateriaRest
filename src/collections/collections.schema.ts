import * as mongoose from 'mongoose';

export const CollectionSchema = new mongoose.Schema({
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
        required: false,
    },
    date: {
        type: Date,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    createur: {
        type: String,
        required: true,
    },
    fonds: {
        type: String,
        required: false,
    },
    langue: {
        type: String,
        required: false,
    },
    notices: {
        type: Array,
        required: false,
    },
    series: {
        type: Array,
        required: false,
    }
});