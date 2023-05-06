<template>
    <v-sheet class="rounded-xl pa-3 pa-sm-5" height="auto" elevation="3">
        <p class="text-h6 text-center mb-4">{{ props.question.questionText }}</p>
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
    import {PropType} from "@vue/runtime-core";
    import {QuestionsInfo} from "~/store/questionStore";

    const props = defineProps({
        question: Object as PropType<QuestionsInfo>
    })

</script>

<style scoped>

</style>
