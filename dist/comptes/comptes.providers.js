"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comptesProviders = void 0;
const comptes_schema_1 = require("./comptes.schema");
const constants_1 = require("../constants");
exports.comptesProviders = [
    {
        provide: constants_1.COMPTES_MODEL_PROVIDER,
        useFactory: (connection) => connection.model('Compte', comptes_schema_1.CompteSchema),
        inject: [constants_1.DB_PROVIDER],
    },
];
//# sourceMappingURL=comptes.providers.js.map