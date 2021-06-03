"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
commander_1.default
    .alias('xnew')
    .usage('')
    .arguments('<option> <name>')
    .option('-L --library', '새로운 라이브러리 추가')
    .option('-S --service', '새로운 서비스 추가')
    .action(function (name) {
    console.log(name);
})
    .parse(process.argv);
