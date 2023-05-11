import {defineStore} from "pinia";
import {QuestionsInfo} from "~/store/questionStore";
import {UserInfo} from "~/store/userStore";

interface AnswerInfo {
    answerValue: number
    question: QuestionsInfo

}

interface AnswerInput {
    answerValue: number,
    questionId: number,
    userId: number
}

export interface AnswerCategoryInfo {
    id: number
    value: string
}

const CREATE_ANSWER_MUTATION = gql`
    mutation createAnswer($userId: ID, $answerValue: Int, $questionId: ID) {
        createAnswer(userId: $userId, questionId: $questionId, answerValue: $answerValue) {
            answer {
                user {
                    email
                }
                question {
                    questionText
                }
                answerValue
            }
        }
    }
`

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
            result {
                user {
                    email
                }
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
        saveUserAnswers(userId: number) {

            this.userAnswerMap.forEach((value: number, question: QuestionsInfo)=> {
                const { mutate: createAnswer } = useMutation(CREATE_ANSWER_MUTATION, {
                    variables: {
                        userId: userId,
                        answerValue: value,
                        questionId: question.id

                    },
                })
                createAnswer().then(res => {
                    if (res?.data) {

                    } else if (res?.errors) {
                        console.log(res.errors)
                    }
                })
            })
        },
        // todo debug
        createAnswers(userId: number) {
            const answerList: AnswerInput[] = []
            let answer: AnswerInput = {
                userId: 0,
                answerValue: 0,
                questionId: 0,
            }
            this.userAnswerMap.forEach((value: number, question: QuestionsInfo)=> {
                answer.userId = userId
                answer.answerValue = value
                answer.questionId = question.id
                answerList.push(answer)
            })

            const { mutate: createAnswers  } = useMutation(CREATE_ANSWERS_MUTATION, {
                variables: {
                    answers: answerList
                },
            })
            createAnswers().then(res => {
                if (res?.data) {
                } else if (res?.errors) {
                    console.log(res.errors)
                }
            })
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
        saveUserResult(userId: number) {
            const { mutate: createResult  } = useMutation(CREATE_RESULT_MUTATION, {
                variables: {
                    userId: userId,
                    emailing: this.userResultMap.get("E-mailing"),
                    socialNetworks: this.userResultMap.get("Sociální sítě"),
                    ppc: this.userResultMap.get("Výkonnostní marketing"),
                },
            })
            createResult().then(res => {
                if (res?.data) {
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
