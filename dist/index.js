#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var commands_1 = __importDefault(require("./commands"));
commander_1.default
    .command('xnew')
    .alias('xnew')
    .version('1.0.3', '-v,--version')
    .usage('')
    .arguments('[option]')
    .option('-L --library <name>', '새로운 라이브러리 추가', commands_1.default.library)
    .option('-S --service <name>', '새로운 서비스 추가', commands_1.default.service)
    .parse(process.argv);
