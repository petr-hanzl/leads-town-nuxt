import { defineStore } from 'pinia'
import {QuestionModel} from "~/model/question";

export const useQuestionStore = defineStore( "question", {
    state: () => ({
        allQuestions: [] as QuestionModel[]
    }),
    getters: {
        loadQuestions: (state) => state.allQuestions
    },
    actions: {
        fetchQuestions() {
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

            const { loading, result, error } = useQuery(ALL_QUESTIONS_QUERY);
            if (result) {
                // @ts-ignore
                for (let q in result) {
                    console.log(q)
                    let quest: QuestionModel = JSON.parse(q);
                    this.allQuestions.push(quest)
                }

            }
            // this.allQuestions = result
        }
    },

})


// const questions = reactive([]);
//
//
// // query all questions from db

// return{
//     loadQuestions
// }
