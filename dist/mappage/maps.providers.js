"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapsProviders = void 0;
const maps_schema_1 = require("./maps.schema");
const constants_1 = require("../constants");
exports.mapsProviders = [
    {
        provide: constants_1.MAPS_MODEL_PROVIDER,
        useFactory: (connection) => connection.model('Mappage', maps_schema_1.MapSchema),
        inject: [constants_1.DB_PROVIDER],
    },
];
//# sourceMappingURL=maps.providers.js.map