
export class Answer {
    readonly id: number
    readonly answerValue: string


    constructor(answerValue: string, id: number) {
        this.id = id;
        this.answerValue = answerValue;
    }
}

export class AnswerCategory {
    id: number
    value: string

    constructor(id: number, value: string) {
        this.id = id
        this.value = value
    }
}
