import {defineStore} from "pinia";
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

const CREATE_RESULT_MUTATION = gql`
    mutation createResult($emailing: Int, $socialNetworks: Int, $ppc: Int, $userId: ID) {
        createResult(emailing: $emailing, socialNetworks: $socialNetworks, ppc: $ppc, userId: $userId) {
            user {
                email
            }
        }
    }
`

export const useAnswerStore = defineStore('userStore', {
    state: () => ({
        userResult: new Map as Map<string, number>,
        userAnswerMap: new Map as Map<number, number>,
    }),
    actions: {
        setAnswer(questionId: number, answerValue: number) {
            console.log(questionId)
            if(isNaN(answerValue)) {
                answerValue = 5
            }
            console.log(answerValue)
            this.userAnswerMap.set(questionId, answerValue)
        },
        setResult() {


        },


        // saveAllAnswers from array to DB todo rework to map
        // saveAllAnswers() {
        //     const { mutate: createAnswers } = useMutation(CREATE_ANSWERS_MUTATION, {
        //         variables: {
        //             answers: this.userAnswerList
        //         },
        //     })
        //     createAnswers().then(res => {
        //         // todo log about new questionnaire
        //         if (res?.data) {
        //             console.log("answers saved")
        //         } else if (res?.errors) {
        //             // todo log errors
        //             console.log(res.errors)
        //         }
        //     })
        // },

        // createResult from appended answers todo rework to map
        // createResult() {
        //     this.userAnswerList.forEach((answer) => {
        //         if (answer.question.answerCategory.value === 'Scale') {
        //             this.userResult.set(answer.question.questionCategory.value, answer.answerValue)
        //         } else {
        //             this.userResult.set(answer.question.questionCategory.value, answer.answerValue*10)
        //         }
        //     })
        // },

        saveUserResult() {
            const { mutate: createResult  } = useMutation(CREATE_RESULT_MUTATION, {
                variables: {
                    emailing: this.userResult.get("emailing"),
                    socialNetworks: this.userResult.get("socialNetworks"),
                    ppc: this.userResult.get("ppc"),
                },
            })
            createResult().then(res => {
                if (res?.data) {
                    console.log("result saved")
                } else if (res?.errors) {
                    console.log(res.errors)
                }
            })
        }
    }
})
