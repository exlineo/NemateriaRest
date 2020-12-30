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
exports.CollectionsService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const constants_1 = require("../constants");
let CollectionsService = class CollectionsService {
    constructor(collecModel) {
        this.collecModel = collecModel;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.collecModel.find().exec();
        });
    }
    findUn(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.collecModel.findById(id).exec();
        });
    }
    cree(creeCollecDto) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(creeCollecDto);
            const createdCollection = new this.collecModel(creeCollecDto);
            return yield createdCollection.save();
        });
    }
    updateUn(collec) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.collecModel.findByIdAndUpdate(collec._id, collec).exec();
        });
    }
    deleteUn(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.collecModel.findByIdAndDelete(id).exec();
        });
    }
    findSeries(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Les séries sont appelées");
            return yield this.collecModel.find({ '_id': id }).select('relations.serie -_id').exec();
        });
    }
};
CollectionsService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(constants_1.COLLECTIONS_MODEL_PROVIDER)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CollectionsService);
exports.CollectionsService = CollectionsService;
//# sourceMappingURL=collections.service.js.map