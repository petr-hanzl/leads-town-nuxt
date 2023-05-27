import {defineStore} from 'pinia'
import {AnswerCategoryInfo} from "~/store/answerStore";

const ALL_QUESTIONS_QUERY = gql`
    query {
        listQuestions{
            id,
            questionText,
            questionCategory{
                category
            }
            answerCategory{
                category
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
}

interface QuestionCategoryInfo {
    id: number
    category: string
}


type QuestionResult = {
    listQuestions: QuestionsInfo[]

}


export const useQuestionStore = defineStore( "questionStore", {
    state:() => ({
        questionList: [] as QuestionsInfo[],
        position: 0,
        questionCategories: new Map<number, string>
    }),
    actions: {
        async fetchAllQuestions() {
            const { data, error } = await useAsyncQuery<QuestionResult>(ALL_QUESTIONS_QUERY)
            if (data.value){
                this.questionList = data.value.listQuestions
                this.questionList.forEach((question) => {
                    this.questionCategories.set(question.id, question.questionCategory.category)
                })
            } else if (error.value) {
                console.log("cannot fetch questions")
                console.log(error.value)
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
