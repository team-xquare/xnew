"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var service_1 = __importDefault(require("./service/service"));
var service_2 = __importDefault(require("./service/service"));
exports.default = {
    service: service_1.default,
    library: service_2.default
};
