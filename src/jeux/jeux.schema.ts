import * as mongoose from 'mongoose';

export const JeuSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true,
    },
    contenu: {
        type: String,
        required: false,
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    }
});