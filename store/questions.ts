import { defineStore } from 'pinia'

export const useQuestionStore = defineStore( "question", {
    state: () => ({
        allQuestions: []
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
                this.allQuestions = result;
            }
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
