<template>
    <Question :question="questionStore.getCurrentQuestion()"/>
</template>

<script setup lang="ts">

    import Question from "~/components/newVersion/Question.vue";

    import {useQuestionStore} from "~/store/questionStore";
    const questionStore = useQuestionStore()
    const route = useRoute();

    if (route.params.id === '0') {
        questionStore.resetPosition()
    }






    //


</script>

<style scoped>

</style>
