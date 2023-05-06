<template>
    <v-container class="d-flex justify-center">
        <v-sheet class="pa-4 pa-sm-7 rounded-xl d-flex justify-center align-center" elevation="5">

                <v-col class="d-block">
                    <div v-for="q in store.getAllQuestions">
                        <div v-if="q.answerCategory.value==='Scale'">
                            <QuestionSlider :question="q"/>
                        </div>
                        <div v-else>
                            <QuestionYesNo :text="q.questionText"/>
                        </div>

                    </div>
                    <nuxt-link :to="{name:'result'}">
                        <v-btn
                            class="ma-4"
                            type="submit"
                            rounded
                            color="primary"
                            variant="tonal"
                            size="x-large"
                        >Odeslat</v-btn>
                    </nuxt-link>
                </v-col>




        </v-sheet>
    </v-container>
</template>


<script lang="ts" setup>
    import {useQuestionStore} from "~/store/questionStore";

    // retrieve questionStore
    const store = useQuestionStore()

    // fetch
    const { fetchAllQuestions } = store
    await fetchAllQuestions()





</script>



<style scoped>

</style>
