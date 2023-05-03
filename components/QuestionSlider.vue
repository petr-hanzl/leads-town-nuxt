<template>
    <v-sheet class="rounded-xl pa-3 pa-sm-5" height="auto" elevation="3">
        <p class="text-h6 text-center mb-4">Otázka slider?</p>
        <v-slider
                color="primary"
                min="1"
                max="10"
                step="1"
                show-ticks
                thumb-label
        ></v-slider>
    </v-sheet>
</template>

<script setup lang="ts">
    import { Question } from "model/question";

    let questionText: string
    const props = defineProps({
        q: Question
    })
    if (props.q) {
        questionText = props.q.questionText
    }

</script>

<style scoped>

</style>
