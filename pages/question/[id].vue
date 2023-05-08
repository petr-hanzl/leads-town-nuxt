<template>
    <Question :question="useQuestionStore().getCurrentQuestion()"/>
</template>

<script setup lang="ts">
    import {useQuestionStore} from "~/store/questionStore";
    import Question from "~/components/newVersion/Question.vue";


</script>

<style scoped>

</style>
