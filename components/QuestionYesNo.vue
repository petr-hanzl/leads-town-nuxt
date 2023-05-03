<template>
    <v-col>
        <v-sheet class="pb-5 mb-10 pt-10 rounded-xl mr-5 ml-5" elevation="3">
            <p class="text-h6 text-center my-6">{{ question.questionText }}</p>
            <v-btn-toggle  rounded="xl" variant="outlined" color="primary" class="d-flex justify-center">
                <v-btn size="x-large">Ano</v-btn>
                <v-btn size="x-large">Ne</v-btn>
            </v-btn-toggle>
        </v-sheet>
    </v-col>
</template>

<script setup lang="ts">
    import { Question } from "model/question";

    const { question } = defineProps({
        question: Question
    })
</script>

<style scoped>

</style>
