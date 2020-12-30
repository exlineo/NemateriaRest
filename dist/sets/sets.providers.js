"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setsProviders = void 0;
const sets_schema_1 = require("./sets.schema");
const constants_1 = require("../constants");
exports.setsProviders = [
    {
        provide: constants_1.SETS_MODEL_PROVIDER,
        useFactory: (connection) => connection.model('Set', sets_schema_1.SetSchema),
        inject: [constants_1.DB_PROVIDER],
    },
];
//# sourceMappingURL=sets.providers.js.map