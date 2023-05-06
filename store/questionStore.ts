import {defineStore} from 'pinia'
import {UserInfo} from "~/store/userStore";
import {AnswerCategoryInfo} from "~/store/answerStore";
import {UseQueryReturn} from "@vue/apollo-composable";

const ALL_QUESTIONS_QUERY = gql`
    query {
        allQuestions{
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
    }),
    actions: {
        async fetchAllQuestions() {
            const { data } = await useAsyncQuery<QuestionResult>(ALL_QUESTIONS_QUERY)
            if (data.value){
                this.questionList = data.value.allQuestions
            }
        },
    },
    getters: {
        getAllQuestions(state): QuestionsInfo[] {
            return state.questionList
        }
    }

})


// const questions = reactive([]);
//
//
// // query all questions from db

// return{
//     loadQuestions
// }
