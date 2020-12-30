"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltresSchema = void 0;
const mongoose = require("mongoose");
exports.FiltresSchema = new mongoose.Schema({
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
//# sourceMappingURL=filtres.schema.js.map