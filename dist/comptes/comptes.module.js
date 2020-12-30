"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComptesModule = void 0;
const common_1 = require("@nestjs/common");
const comptes_controller_1 = require("./comptes.controller");
const comptes_service_1 = require("./comptes.service");
const comptes_providers_1 = require("./comptes.providers");
const database_module_1 = require("../db/database.module");
let ComptesModule = class ComptesModule {
};
ComptesModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [comptes_controller_1.ComptesController],
        providers: [comptes_service_1.ComptesService, ...comptes_providers_1.comptesProviders]
    })
], ComptesModule);
exports.ComptesModule = ComptesModule;
//# sourceMappingURL=comptes.module.js.map