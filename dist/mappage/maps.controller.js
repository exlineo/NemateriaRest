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
exports.MapsController = void 0;
const common_1 = require("@nestjs/common");
const create_map_dto_1 = require("./dto/create-map.dto");
const maps_service_1 = require("./maps.service");
let MapsController = class MapsController {
    constructor(mapsService) {
        this.mapsService = mapsService;
    }
    create(creeMapDto) {
        return __awaiter(this, void 0, void 0, function* () {
            this.mapsService.create(creeMapDto);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.mapsService.findAll();
        });
    }
    findUn(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.mapsService.findUn(id);
        });
    }
    update(id, creeMapDto) {
        return this.mapsService.updateUn(id, creeMapDto);
    }
    remove(id) {
        return this.mapsService.deleteUn(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_map_dto_1.CreateMapDto]),
    __metadata("design:returntype", Promise)
], MapsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MapsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MapsController.prototype, "findUn", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_map_dto_1.CreateMapDto]),
    __metadata("design:returntype", void 0)
], MapsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MapsController.prototype, "remove", null);
MapsController = __decorate([
    common_1.Controller('mappages'),
    __metadata("design:paramtypes", [maps_service_1.MapsService])
], MapsController);
exports.MapsController = MapsController;
//# sourceMappingURL=maps.controller.js.map