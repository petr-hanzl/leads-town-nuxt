<template>
    <v-container class="d-flex justify-center">

      <v-col cols="12" class="mb-8" lg="6">
          <v-sheet class="mb-10 pt-10 rounded-xl " elevation="10">
              <div v-for="q in questions">
                  <question-slider :question="q"/>

                {{q}}
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
const questionStore = useQuestionStore();

if (questionStore.loadQuestions.length < 0) {
    questionStore.fetchQuestions()
}

const questions = questionStore.allQuestions
console.log(questions)

// const userId = localStorage.getItem('userId')
// localStorage.removeItem('userId')
// console.log(userId)
</script>



<style scoped>

</style>
