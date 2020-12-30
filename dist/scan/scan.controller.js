"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.ScanController = void 0;
const common_1 = require("@nestjs/common");
const scan_service_1 = require("./scan.service");
let ScanController = class ScanController {
    constructor(scanService) {
        this.scanService = scanService;
    }
    listeDossiers() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Liste de dossiers", yield this.scanService.scan());
            return yield this.scanService.scan();
        });
    }
    scanUnDir(dir, q) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(":dir détecté", dir, q);
            return yield this.scanService.scanDir(dir);
        });
    }
    scanUnFichier(fichier, q) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(":fichier détecté", fichier, q);
            return yield this.scanService.scanFichier(fichier);
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScanController.prototype, "listeDossiers", null);
__decorate([
    common_1.Get(':dir'),
    __param(0, common_1.Param('dir')), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ScanController.prototype, "scanUnDir", null);
__decorate([
    common_1.Get(':fichier'),
    __param(0, common_1.Param('fichier')), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ScanController.prototype, "scanUnFichier", null);
ScanController = __decorate([
    common_1.Controller('scans'),
    __metadata("design:paramtypes", [scan_service_1.ScanService])
], ScanController);
exports.ScanController = ScanController;
//# sourceMappingURL=scan.controller.js.map