<template>
    <v-container class="d-flex justify-center">

      <v-col cols="12" class="mb-8" lg="6">
          <v-sheet class="mb-10 pt-10 rounded-xl " elevation="10">
              <div v-for="q in questions">
                  <div v-if="q.answerCategory.value === 'Scale'">
                      <question-slider :question="q"/>
                  </div>
                  <div v-if="q.answerCategory.value === 'True/False'">
                      <question-yes-no :question="q"/>
                  </div>
              </div>

              <nuxt-link :to="{name:'result'}">
                <v-btn
                        class="me-4"
                        type="submit"
                        rounded
                        color="primary"
                        variant="tonal"
                        size="large"
                >Odeslat</v-btn>
              </nuxt-link>
          </v-sheet>
      </v-col>
    </v-container>
</template>


<script lang="ts" setup>
  import {useQuestionStore} from "~/store/questions";
  import {QuestionModel} from "~/model/question";
  const questionStore = useQuestionStore();

  if (questionStore.loadQuestions.length < 1) {
      questionStore.fetchQuestions()
  }

  const questions: QuestionModel[] = questionStore.allQuestions
  console.log(questions)
</script>



<style scoped>

</style>
