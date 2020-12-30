"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
const constants_1 = require("../constants");
const config_1 = require("../config");
exports.databaseProviders = [
    {
        provide: constants_1.DB_PROVIDER,
        useFactory: () => __awaiter(void 0, void 0, void 0, function* () {
            mongoose.Promise = global.Promise;
            return yield mongoose.connect(config_1.CONFIG_ADR, { useNewUrlParser: true });
        }),
    },
];
//# sourceMappingURL=database.providers.js.map