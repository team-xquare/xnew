#!/usr/bin/env node
import commander from 'commander'
import commands from './commands'

commander
    .command('xnew-frontend')
    .alias('xnew')
    .version('1.1.4','-v,--version')
    .usage('')
    .arguments('[option]')
    .option('-L --library <name>','새로운 라이브러리 추가', commands.library)
    .option('-S --service <name>','새로운 서비스 추가', commands.service)
    .parse(process.argv)

