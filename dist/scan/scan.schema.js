"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScanSchema = void 0;
const mongoose = require("mongoose");
exports.ScanSchema = new mongoose.Schema({
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
//# sourceMappingURL=scan.schema.js.map