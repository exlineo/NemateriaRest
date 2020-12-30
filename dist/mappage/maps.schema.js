"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapSchema = void 0;
const mongoose = require("mongoose");
exports.MapSchema = new mongoose.Schema({
    _id: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
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
    type: {
        type: String,
        required: true,
    },
    createur: {
        type: String,
        required: true,
    },
    appartient: {
        type: String,
        required: true,
    },
    langue: {
        type: String,
        required: true,
    }
});
//# sourceMappingURL=maps.schema.js.map