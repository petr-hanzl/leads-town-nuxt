import {defineStore} from "pinia";

interface AnswerInfo {
    answerValue: string
    userId: number
    questionId: number

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
    }),
    actions: {
        appendAnswer(question: AnswerInfo) {
            this.userAnswerList.push(question)
        },
        createQuestions() {
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
                    console.log(res.errors)
                }
            })
        }
    }
})
