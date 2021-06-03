"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
function Service(name) {
    fs_1.default.writeFile('package.json', "{\n\t\"name\": \"@service/" + name + "\",\n\t\"version\": \"1.0.0\"\n}", function (err) {
    });
}
exports.default = Service;
