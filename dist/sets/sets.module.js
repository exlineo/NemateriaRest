"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetsModule = void 0;
const common_1 = require("@nestjs/common");
const sets_controller_1 = require("./sets.controller");
const sets_service_1 = require("./sets.service");
const sets_providers_1 = require("./sets.providers");
const database_module_1 = require("../db/database.module");
let SetsModule = class SetsModule {
};
SetsModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [sets_controller_1.SetsController],
        providers: [
            sets_service_1.SetsService,
            ...sets_providers_1.setsProviders,
        ],
    })
], SetsModule);
exports.SetsModule = SetsModule;
//# sourceMappingURL=sets.module.js.map