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
exports.NoticesController = void 0;
const common_1 = require("@nestjs/common");
const create_notice_dto_1 = require("./dto/create-notice.dto");
const notices_service_1 = require("./notices.service");
let NoticesController = class NoticesController {
    constructor(noticesService) {
        this.noticesService = noticesService;
    }
    findPaquet() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Notices : pas de requete détectée, renvoie de toutes les notices");
            return this.noticesService.findAll();
        });
    }
    findCollection(c) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Demande des notice d'une collection", c);
            return this.noticesService.findCollection(c);
        });
    }
    findUn(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.noticesService.findUn(id);
        });
    }
    findCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.noticesService.countAll();
        });
    }
    findCollecCount(c) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.noticesService.countCollec(c);
        });
    }
    cree(CreateNoticeDto) {
        return __awaiter(this, void 0, void 0, function* () {
            this.noticesService.cree(CreateNoticeDto);
        });
    }
    updateUn(id, n) {
        return __awaiter(this, void 0, void 0, function* () {
            this.noticesService.updateUn(id, n);
        });
    }
    deleteUn(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.noticesService.deleteUn(id);
        });
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoticesController.prototype, "findPaquet", null);
__decorate([
    common_1.Get('/collection/:c'),
    __param(0, common_1.Param('c')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NoticesController.prototype, "findCollection", null);
__decorate([
    common_1.Get('/notice/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NoticesController.prototype, "findUn", null);
__decorate([
    common_1.Get(':count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoticesController.prototype, "findCount", null);
__decorate([
    common_1.Get('/collection/:c/count'),
    __param(0, common_1.Param('c')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NoticesController.prototype, "findCollecCount", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_notice_dto_1.CreateNoticeDto]),
    __metadata("design:returntype", Promise)
], NoticesController.prototype, "cree", null);
__decorate([
    common_1.Post(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NoticesController.prototype, "updateUn", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NoticesController.prototype, "deleteUn", null);
NoticesController = __decorate([
    common_1.Controller('notices'),
    __metadata("design:paramtypes", [notices_service_1.NoticesService])
], NoticesController);
exports.NoticesController = NoticesController;
//# sourceMappingURL=notices.controller.js.map