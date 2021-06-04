import { QuestionCollection } from "inquirer";

export const templates : QuestionCollection<{ template: any; }> = {
    type: "list",
    name: "template",
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
}