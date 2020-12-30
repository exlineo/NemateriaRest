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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScanService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const node_exiftool_1 = require("node-exiftool");
const config_1 = require("../config");
const constants_1 = require("../constants");
const fs = require("fs");
let ScanService = class ScanService {
    constructor(scanModel, exif) {
        this.scanModel = scanModel;
        this.exif = exif;
    }
    scan() {
        return __awaiter(this, void 0, void 0, function* () {
            this.dossiers = [];
            console.log("Scan des dossiers lancé");
            return new Promise((resolve, reject) => {
                fs.readdir(config_1.SCAN_ADR, (err, dir) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(dir);
                    }
                });
            });
        });
    }
    scanDir(dir) {
        return __awaiter(this, void 0, void 0, function* () {
            dir = dir.replace('../', '');
            yield this.exif.open()
                .then(() => this.readDir(dir))
                .then(() => this.exif.close())
                .catch(console.error);
            return this.metas;
        });
    }
    readDir(dir) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.exif.readMetadata(config_1.SCAN_ADR + dir, ['-File:all'])
                .then(data => {
                this.metas = data;
            });
        });
    }
    scanFichier(fichier) {
        return __awaiter(this, void 0, void 0, function* () {
            fichier = fichier.replace('../', '');
            yield this.exif.open()
                .then(() => this.readFIchier(fichier))
                .then(() => this.exif.close())
                .catch(console.error);
            return this.metas;
        });
    }
    readFIchier(fichier) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.exif.readMetadata(fichier, ['-File:all'])
                .then(data => {
                this.metas = data;
            });
        });
    }
};
ScanService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.SCAN_MODEL_PROVIDER)),
    __metadata("design:paramtypes", [mongoose_1.Model, typeof (_a = typeof node_exiftool_1.ExiftoolProcess !== "undefined" && node_exiftool_1.ExiftoolProcess) === "function" ? _a : Object])
], ScanService);
exports.ScanService = ScanService;
//# sourceMappingURL=scan.service.js.map