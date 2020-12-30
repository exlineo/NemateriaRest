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
exports.FiltresController = void 0;
const common_1 = require("@nestjs/common");
const filtres_service_1 = require("./filtres.service");
const filtre_dto_1 = require("./dto/filtre.dto");
let FiltresController = class FiltresController {
    constructor(filtresServ) {
        this.filtresServ = filtresServ;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.filtresServ.findAll();
        });
    }
    findUn(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.filtresServ.findUn(id);
        });
    }
    creeFiltre(filtreDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.filtresServ.cree(filtreDto);
        });
    }
    update(upFiltreDto) {
        console.log("Update tenté", upFiltreDto);
        return this.filtresServ.updateUn(upFiltreDto);
    }
    remove(id) {
        return this.filtresServ.deleteUn(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FiltresController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FiltresController.prototype, "findUn", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filtre_dto_1.FiltreDto]),
    __metadata("design:returntype", Promise)
], FiltresController.prototype, "creeFiltre", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filtre_dto_1.FiltreDto]),
    __metadata("design:returntype", void 0)
], FiltresController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FiltresController.prototype, "remove", null);
FiltresController = __decorate([
    common_1.Controller('filtres'),
    __metadata("design:paramtypes", [filtres_service_1.FiltresService])
], FiltresController);
exports.FiltresController = FiltresController;
//# sourceMappingURL=filtres.controller.js.map