"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapsModule = void 0;
const common_1 = require("@nestjs/common");
const maps_controller_1 = require("./maps.controller");
const maps_service_1 = require("./maps.service");
const maps_providers_1 = require("./maps.providers");
const database_module_1 = require("../db/database.module");
let MapsModule = class MapsModule {
};
MapsModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [maps_controller_1.MapsController],
        providers: [
            maps_service_1.MapsService,
            ...maps_providers_1.mapsProviders,
        ],
    })
], MapsModule);
exports.MapsModule = MapsModule;
//# sourceMappingURL=maps.module.js.map