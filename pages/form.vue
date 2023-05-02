<template>
    <v-container class="d-flex justify-center">

      <v-col cols="12" class="mb-8" lg="6">
          <v-sheet class="mb-10 pt-10 rounded-xl" elevation="10">
              <v-row>
                  <v-col>
                      <QuestionSlider/>
                  </v-col>
                  <v-col>
                      <QuestionYesNo/>
                  </v-col>
              </v-row>
              <QuestionYesNo/>
              <QuestionYesNo/>
              <QuestionYesNo/>
              <QuestionYesNo/>
              <QuestionYesNo/>
              <QuestionYesNo/>
              <QuestionYesNo/>

          </v-sheet>
      </v-col>
    </v-container>
</template>

<script setup>

import QuestionSlider from "~/components/QuestionSlider.vue";
import QuestionYesNo from "~/components/QuestionYesNo.vue";


</script>

<style scoped>

</style>
