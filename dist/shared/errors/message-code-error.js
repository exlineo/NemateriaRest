"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageCodeError = void 0;
const error_message_1 = require("../config/error-message");
class MessageCodeError extends Error {
    constructor(messageCode) {
        super();
        const errorMessageConfig = this.getMessageFromMessageCode(messageCode);
        if (!errorMessageConfig)
            throw new Error('Unable to find message code error.');
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.httpStatus = errorMessageConfig.httpStatus;
        this.messageCode = messageCode;
        this.errorMessage = errorMessageConfig.errorMessage;
        this.message = errorMessageConfig.userMessage;
    }
    getMessageFromMessageCode(messageCode) {
        let errorMessageConfig;
        Object.keys(error_message_1.errorMessagesConfig).some(key => {
            if (key === messageCode) {
                errorMessageConfig = error_message_1.errorMessagesConfig[key];
                return true;
            }
            return false;
        });
        if (!errorMessageConfig)
            throw new Error('Unable to find the given message code error.');
        return errorMessageConfig;
    }
}
exports.MessageCodeError = MessageCodeError;
//# sourceMappingURL=message-code-error.js.map