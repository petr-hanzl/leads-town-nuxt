<template>
    <v-col>
        <v-sheet class="mb-10 pt-10 rounded-xl mr-5 ml-5" elevation="3">
            <p class="text-h6 text-center my-6">{{ questionText }}</p>
            <v-slider
                    color="primary"
                    min="1"
                    max="10"
                    step="1"
                    show-ticks
                    thumb-label
            ></v-slider>
        </v-sheet>
    </v-col>
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
