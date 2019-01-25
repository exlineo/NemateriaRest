import * as mongoose from 'mongoose';

export const NoticeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: false,
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    }
});