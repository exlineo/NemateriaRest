"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeSchema = void 0;
const mongoose = require("mongoose");
exports.NoticeSchema = new mongoose.Schema({
    _id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    metadonnees: {}
});
//# sourceMappingURL=notices.schema.js.map