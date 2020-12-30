"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompteSchema = void 0;
const mongoose = require("mongoose");
exports.CompteSchema = new mongoose.Schema({
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
//# sourceMappingURL=comptes.schema.js.map