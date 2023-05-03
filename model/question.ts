import { AnswerCategory } from "./answer"
import { User } from "./user"
export class QuestionModel {
    id: number
    questionText: string
    questionCategory: QuestionCategoryModel
    answerCategory: AnswerCategory
    active: boolean
    user: User



    constructor(id: number, questionText: string, questionCategory: QuestionCategoryModel, answerCategory: AnswerCategory, active: boolean, user: User) {
        this.id = id
        this.questionText = questionText;
        this.questionCategory = questionCategory;
        this.answerCategory = answerCategory;
        this.active = active;
        this.user = user
    }


}

export class QuestionCategoryModel {
    id: number
    value: string

    constructor(id: number, value: string) {
        this.id = id
        this.value = value
    }


}
