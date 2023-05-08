<template>
    <v-sheet class=" rounded-xl pa-4 pa-sm-6" elevation="3">
        <p class="text-h6 text-center mb-4">{{ props.question.questionText }}</p>
        <v-btn-toggle rounded="xl"
                      variant="outlined"
                      color="primary"
                      class="d-flex justify-center"
                      ref="val"
        >
            <v-btn size="x-large" @input="setYes()">Ano</v-btn>
            <v-btn size="x-large" @input="setNo()">Ne</v-btn>
        </v-btn-toggle>
    </v-sheet>
</template>

<script setup lang="ts">
    import {QuestionsInfo} from "~/store/questionStore";
    import {useAnswerStore} from "~/store/answerStore";
    import {Ref} from "vue";

    const store = useAnswerStore()

    const setNo = () => {
        store.setAnswer(props.question.id, 0)
    }

    const setYes = () => {
        store.setAnswer(props.question.id, 1)
    }

    let val : Ref<string>

    interface Props {
        question: QuestionsInfo
    }

    const props = defineProps<Props>()
</script>

<style scoped>

</style>
