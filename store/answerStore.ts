import {defineStore} from "pinia";
import {integer} from "vscode-languageserver-types";
import {QuestionsInfo} from "~/store/questionStore";

interface AnswerInfo {
    answerValue: number
    question: QuestionsInfo

}

export interface AnswerCategoryInfo {
    id: number
    value: string
}

const CREATE_ANSWERS_MUTATION = gql`
    mutation createAnswers($answers: [AnswerInput]) {
        createAnswers(answers: $answers){
            answers {
                answerValue
                user {
                    email
                }
                question {
                    questionText
                }
            }
        }
    }
`

export const useAnswerStore = defineStore('userStore', {
    state: () => ({
        userAnswerList: [] as AnswerInfo[],
        userResult: new Map as Map<string, number>
    }),
    actions: {
        // appendAnswer
        appendAnswer(question: AnswerInfo) {
            this.userAnswerList.push(question)
        },

        // saveAllAnswers from array to DB
        saveAllAnswers() {
            const { mutate: createAnswers } = useMutation(CREATE_ANSWERS_MUTATION, {
                variables: {
                    answers: this.userAnswerList
                },
            })
            createAnswers().then(res => {
                // todo log about new questionnaire
                if (res?.data) {
                    console.log("answers saved")
                } else if (res?.errors) {
                    // todo log errors
                    console.log(res.errors)
                }
            })
        },

        // createResult from appended answers
        createResult() {
            this.userAnswerList.forEach((answer) => {
                if (answer.question.answerCategory.value === 'Scale') {
                    this.userResult.set(answer.question.questionCategory.value, answer.answerValue)
                } else {
                    this.userResult.set(answer.question.questionCategory.value, answer.answerValue*10)
                }
            })

        }
    }
})
