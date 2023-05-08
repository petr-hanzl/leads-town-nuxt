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

export const useAnswerStore = defineStore( "answerStore", {
    state:() => ({
        userResultMap: new Map() as Map<string, number>,
        userAnswerMap: new Map() as Map<QuestionsInfo, number>,
    }),
    actions: {
        setAnswer(question: QuestionsInfo, answerValue: number) {
            if(isNaN(answerValue)) {
                answerValue = 0
            }
            if (question.answerCategory.value !== 'Scale') {
                answerValue = answerValue * 10
            }
            this.userAnswerMap.set(question, answerValue)
        },
        createResult() {
            this.userAnswerMap.forEach((answer, question) => {
                const currentResult = this.userResultMap.get(question.questionCategory.value)

                if(currentResult !== undefined) {
                    this.userResultMap.set(question.questionCategory.value, currentResult + answer)
                } else {
                    this.userResultMap.set(question.questionCategory.value, answer)
                }
            })

            // we wanna start at middle
            this.userResultMap.forEach((result, category, m) => {
                // @ts-ignore
                m.set(category, m.get(category)+ 50)
            })

        },
        saveUserResult() {
            const { mutate: createResult  } = useMutation(CREATE_RESULT_MUTATION, {
                variables: {
                    emailing: this.userResultMap.get("E-mailing"),
                    socialNetworks: this.userResultMap.get("Sociální sítě"),
                    ppc: this.userResultMap.get("Výkonnostní marketing"),
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
    },

    getters: {
        getResult(state): Map<string, number> {
            return state.userResultMap
        }
    }
})
