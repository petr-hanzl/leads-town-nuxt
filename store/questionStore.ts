import {defineStore} from 'pinia'
import {UserInfo} from "~/store/userStore";
import {AnswerCategoryInfo} from "~/store/answerStore";
import {UseQueryReturn} from "@vue/apollo-composable";

const ALL_QUESTIONS_QUERY = gql`
    query {
        allQuestions{
            id,
            questionText,
            questionCategory{
                value
            }
            answerCategory{
                value
            }
        }
    }
`;

export interface QuestionsInfo {
    id: number
    questionText: string
    questionCategory: QuestionCategoryInfo
    answerCategory: AnswerCategoryInfo
    active: boolean
    // user: UserInfo todo????

}

interface QuestionCategoryInfo {
    id: number
    value: string
}


type QuestionResult = {
    allQuestions: QuestionsInfo[]

}


export const useQuestionStore = defineStore( "questionStore", {
    state:() => ({
        questionList: [] as QuestionsInfo[],
        position: 0,
        questionCategories: new Map<number, string>
    }),
    actions: {
        async fetchAllQuestions() {
            const { data } = await useAsyncQuery<QuestionResult>(ALL_QUESTIONS_QUERY)
            if (data.value){
                this.questionList = data.value.allQuestions
                this.questionList.forEach((question) => {
                    this.questionCategories.set(question.id, question.questionCategory.value)
                })
            } else {
                console.log("cannot fetch questions")
            }
            this.position = 0

        },
        nextPosition() {
            this.position++
        },
        currentPosition(): number {
            return this.position
        },
        previousPosition() {
            this.position--
        },
        getCurrentQuestion() {
            return this.questionList.at(this.position)
        },
        getQuestionAt(position: number) {
            return this.questionList.at(position)
        }


    },

    getters: {
        getAllQuestions(state): QuestionsInfo[] {
            return state.questionList
        },
        getNumberOfQuestions(state): number {
            return state.questionList.length
        }



    }

})
