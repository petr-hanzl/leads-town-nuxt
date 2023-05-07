<template>
    <v-sheet class="rounded-xl pa-3 pa-sm-5" height="auto" elevation="3">
        <p class="text-h6 text-center mb-4">{{ props.question.questionText }}</p>
        <v-slider
                @input="setAnswer(props.question.id, answerValue)"
                v-model="answerValue"
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
    import {QuestionsInfo} from "~/store/questionStore";
    import {useAnswerStore} from "~/store/answerStore";

    const store = useAnswerStore()
    const { setAnswer } = store

    let answerValue: number


    interface Props {
        question: QuestionsInfo
    }

    const props = defineProps<Props>()

</script>

<style scoped>

</style>
