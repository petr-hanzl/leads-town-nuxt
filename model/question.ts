import { AnswerCategory } from "./answer"
import { User } from "./user"
export class Question {
    readonly id: number
    public readonly questionText: string
    readonly questionCategory: QuestionCategory
    readonly answerCategory: AnswerCategory
    readonly active: boolean
    user: User


    constructor(id: number, questionText: string, questionCategory: QuestionCategory, answerCategory: AnswerCategory, active: boolean, user: User) {
        this.id = id
        this.questionText = questionText;
        this.questionCategory = questionCategory;
        this.answerCategory = answerCategory;
        this.active = active;
        this.user = user
    }


}

export class QuestionCategory {
    readonly id: number
    readonly value: string

    constructor(id: number, value: string) {
        this.id = id
        this.value = value
    }


}
