"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scanProviders = void 0;
const scan_schema_1 = require("./scan.schema");
const constants_1 = require("../constants");
exports.scanProviders = [
    {
        provide: constants_1.SCAN_MODEL_PROVIDER,
        useFactory: (connection) => connection.model('Scan', scan_schema_1.ScanSchema),
        inject: [constants_1.DB_PROVIDER],
    },
];
//# sourceMappingURL=scan.providers.js.map