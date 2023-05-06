<template>
    <v-sheet class=" rounded-xl pa-4 pa-sm-6" elevation="3">
        <p class="text-h6 text-center mb-4">{{ props.question.questionText }}</p>
        <v-btn-toggle  rounded="xl" variant="outlined" color="primary" class="d-flex justify-center">
            <v-btn size="x-large">Ano</v-btn>
            <v-btn size="x-large">Ne</v-btn>
        </v-btn-toggle>
    </v-sheet>
</template>

<script setup lang="ts">
    import {PropType} from "@vue/runtime-core";
    import {QuestionsInfo} from "~/store/questionStore";

    const props = defineProps({
        question: Object as PropType<QuestionsInfo>
    })
</script>

<style scoped>

</style>
