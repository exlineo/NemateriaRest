"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispatchError = void 0;
const common_1 = require("@nestjs/common");
const message_code_error_1 = require("../errors/message-code-error");
const sequelize_1 = require("sequelize");
let DispatchError = class DispatchError {
    catch(err, host) {
        const res = host.switchToHttp().getResponse();
        if (err instanceof message_code_error_1.MessageCodeError) {
            res.setHeader('x-message-code-error', err.messageCode);
            res.setHeader('x-message', err.message);
            res.setHeader('x-httpStatus-error', err.httpStatus);
            return res.status(err.httpStatus).send();
        }
        else if (err instanceof sequelize_1.ValidationError) {
            res.setHeader('x-message-code-error', err.errors[0].type);
            res.setHeader('x-message', err.errors[0].message);
            res.setHeader('x-httpStatus-error', common_1.HttpStatus.BAD_REQUEST);
            return res.status(common_1.HttpStatus.BAD_REQUEST).send();
        }
        else {
            return res.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
    }
};
DispatchError = __decorate([
    common_1.Catch(message_code_error_1.MessageCodeError, sequelize_1.ValidationError, common_1.HttpException, Error)
], DispatchError);
exports.DispatchError = DispatchError;
//# sourceMappingURL=dispatch-error.js.map