<template>
    <v-container class="d-flex justify-center">
        <v-sheet class="pa-4 pa-sm-7 rounded-xl d-flex justify-center align-center" elevation="5">
            <div v-for="q in store.getAllQuestions">
                <div v-if="q.answerCategory.value==='Scale'">
                    <QuestionSlider :text="q.questionText"/>
                </div>
                <div v-else>
                    <QuestionYesNo :text="q.questionText"/>
                </div>
            </div>
        </v-sheet>
    </v-container>
</template>


<script lang="ts" setup>
    import {useQuestionStore} from "~/store/questions";

    // retrieve questionStore
    const store = useQuestionStore()

    // fetch
    const { fetchAllQuestions } = store
    await fetchAllQuestions()





</script>



<style scoped>

</style>
