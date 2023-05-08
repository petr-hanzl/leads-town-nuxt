<template>
    <Question :question="questionStore.getCurrentQuestion()"/>
</template>

<script setup lang="ts">

    import Question from "~/components/newVersion/Question.vue";

    import {useQuestionStore} from "~/store/questionStore";
    const questionStore = useQuestionStore()

    await questionStore.fetchAllQuestions()




    const route = useRoute()

    // route.params.id


</script>

<style scoped>

</style>
