import fs from 'fs'
import os from 'os';
import path from 'path';
import cpy from 'cpy'
import inquirer from 'inquirer'

async function createXFrontEnd(name : string){
    const answers = await inquirer.prompt({
        type: "list",
        name: "frontend-template",
        message: "사용할 템플릿을 선택하세요",
        choices: [
            {
                name: "next + typescript",
                value: "ts-next"
            },
            {
                name: "react + typescript",
                value: "ts-react"
            },
            {
                name: "react",
                value: "js-react"
            }
        ]
    })
    const root = path.resolve();
    const packageJson = {
        name : `@service/${name}`,
        version : '1.0.0',

    }
    fs.writeFileSync(
        path.join(root, 'package.json'),
        JSON.stringify(packageJson, null, 2) + os.EOL
    );
    await cpy('**',root, {
        parents: true,
        cwd: path.join(__dirname, '../../../src/templates', answers['frontend-template'])
    })
    
}


function Service(name : string){
    createXFrontEnd(name)
}
export default Service
