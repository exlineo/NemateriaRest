"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScanModule = void 0;
const common_1 = require("@nestjs/common");
const scan_controller_1 = require("./scan.controller");
const scan_service_1 = require("./scan.service");
const scan_providers_1 = require("./scan.providers");
const node_exiftool_1 = require("node-exiftool");
const database_module_1 = require("../db/database.module");
let ScanModule = class ScanModule {
};
ScanModule = __decorate([
    common_1.Module({
        imports: [database_module_1.DatabaseModule],
        controllers: [scan_controller_1.ScanController],
        providers: [
            scan_service_1.ScanService,
            node_exiftool_1.ExiftoolProcess,
            ...scan_providers_1.scanProviders,
        ],
    })
], ScanModule);
exports.ScanModule = ScanModule;
//# sourceMappingURL=scan.module.js.map