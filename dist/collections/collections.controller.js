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
exports.CollectionsController = void 0;
const common_1 = require("@nestjs/common");
const create_collection_dto_1 = require("./dto/create-collection.dto");
const collections_service_1 = require("./collections.service");
let CollectionsController = class CollectionsController {
    constructor(collectionsService) {
        this.collectionsService = collectionsService;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.collectionsService.findAll();
        });
    }
    findUn(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.collectionsService.findUn(id);
        });
    }
    findSeries(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.collectionsService.findSeries(id);
        });
    }
    create(collecDto) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Ajout tnté", collecDto);
            this.collectionsService.cree(collecDto);
        });
    }
    update(upCollecDto) {
        console.log("Update tenté", upCollecDto);
        return this.collectionsService.updateUn(upCollecDto);
    }
    remove(id) {
        return `This action removes a #${id} cat`;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CollectionsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CollectionsController.prototype, "findUn", null);
__decorate([
    common_1.Get('/:id/series'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CollectionsController.prototype, "findSeries", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_collection_dto_1.CreateCollectionDto]),
    __metadata("design:returntype", Promise)
], CollectionsController.prototype, "create", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_collection_dto_1.CreateCollectionDto]),
    __metadata("design:returntype", void 0)
], CollectionsController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CollectionsController.prototype, "remove", null);
CollectionsController = __decorate([
    common_1.Controller('collections'),
    __metadata("design:paramtypes", [collections_service_1.CollectionsService])
], CollectionsController);
exports.CollectionsController = CollectionsController;
//# sourceMappingURL=collections.controller.js.map