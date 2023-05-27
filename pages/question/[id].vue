<template>
    <v-app>
        <Question :question="useQuestionStore().getCurrentQuestion()"/>
    </v-app>
</template>

<script setup lang="ts">
    definePageMeta({
        middleware: 'auth'
    })

    import Question from "~/components/newVersion/Question.vue";
    import {useQuestionStore} from "~/store/questionStore";

    const questionStore = useQuestionStore()
    if (!questionStore.questionList || questionStore.questionList == 0) {
        await questionStore.fetchAllQuestions()
    }

</script>

<style scoped>

</style>
