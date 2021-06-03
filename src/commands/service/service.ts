import fs from 'fs'
function Service(name : string){
    fs.writeFile('package.json',`{\n\t"name": "@service/${name}",\n\t"version": "1.0.0"\n}`,
        (err)=>{
        }
    )

}
export default Service
