"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const collections_module_1 = require("./collections/collections.module");
const sets_module_1 = require("./sets/sets.module");
const notices_module_1 = require("./notices/notices.module");
const filtres_module_1 = require("./filtres/filtres.module");
const maps_module_1 = require("./mappage/maps.module");
const scan_module_1 = require("./scan/scan.module");
const comptes_module_1 = require("./comptes/comptes.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [collections_module_1.CollectionsModule, sets_module_1.SetsModule, notices_module_1.NoticesModule, scan_module_1.ScanModule, filtres_module_1.FiltresModule, maps_module_1.MapsModule, comptes_module_1.ComptesModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map