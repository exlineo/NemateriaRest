"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filtresProviders = void 0;
const filtres_schema_1 = require("./filtres.schema");
const constants_1 = require("../constants");
exports.filtresProviders = [
    {
        provide: constants_1.FILTRES_MODEL_PROVIDER,
        useFactory: (connection) => connection.model('Filtre', filtres_schema_1.FiltresSchema),
        inject: [constants_1.DB_PROVIDER],
    },
];
//# sourceMappingURL=filtres.providers.js.map