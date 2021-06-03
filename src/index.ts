import commander from 'commander'


commander
    .alias('xnew')
    .usage('')
    .arguments('<option> <name>')
    .option('-L --library','새로운 라이브러리 추가')
    .option('-S --service','새로운 서비스 추가')
    .action((name)=>{
        console.log(name)
    })
    .parse(process.argv)

