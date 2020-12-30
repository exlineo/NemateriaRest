"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noticesProviders = void 0;
const notices_schema_1 = require("./notices.schema");
const constants_1 = require("../constants");
exports.noticesProviders = [
    {
        provide: constants_1.NOTICES_MODEL_PROVIDER,
        useFactory: (connection) => connection.model('Notice', notices_schema_1.NoticeSchema),
        inject: [constants_1.DB_PROVIDER],
    },
];
//# sourceMappingURL=notices.providers.js.map