"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionsProviders = void 0;
const collections_schema_1 = require("./collections.schema");
const constants_1 = require("../constants");
exports.collectionsProviders = [
    {
        provide: constants_1.COLLECTIONS_MODEL_PROVIDER,
        useFactory: (connection) => connection.model('Collection', collections_schema_1.CollectionSchema),
        inject: [constants_1.DB_PROVIDER],
    },
];
//# sourceMappingURL=collections.providers.js.map