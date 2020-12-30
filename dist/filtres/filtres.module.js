"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiltresModule = void 0;
const common_1 = require("@nestjs/common");
const filtres_controller_1 = require("./filtres.controller");
const filtres_service_1 = require("./filtres.service");
const filtres_providers_1 = require("./filtres.providers");
const database_module_1 = require("../db/database.module");
let FiltresModule = class FiltresModule {
};
FiltresModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [filtres_controller_1.FiltresController],
        providers: [filtres_service_1.FiltresService, ...filtres_providers_1.filtresProviders]
    })
], FiltresModule);
exports.FiltresModule = FiltresModule;
//# sourceMappingURL=filtres.module.js.map