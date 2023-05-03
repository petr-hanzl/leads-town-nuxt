<template>
    <v-app>
        <v-container class="d-flex justify-center">
          <v-col cols="12" lg="8">
              <v-sheet class="pa-4 pa-sm-7 rounded-xl" elevation="5">
                  <v-row class="d-flex justify-center align-center">
                      <v-col cols="12" sm="6">
                          <QuestionSlider/>
                      </v-col>
                      <v-col cols="12" sm="6">
                          <QuestionYesNo/>
                      </v-col>
                  </v-row>
                  <v-row>
                      <v-col>
                          <QuestionYesNo/>
                      </v-col>
                      <v-col>
                          <QuestionYesNo/>
                      </v-col>
                  </v-row>
                  <v-row>
                      <v-col>
                          <QuestionYesNo/>
                      </v-col>
                      <v-col>
                          <QuestionYesNo/>
                      </v-col>
                  </v-row>
                  <v-row>
                      <v-col>
                          <QuestionYesNo/>
                      </v-col>
                      <v-col>
                          <QuestionYesNo/>
                      </v-col>
                  </v-row>
              </v-sheet>
          </v-col>
        </v-container>
    </v-app>
</template>

<script setup>

import QuestionSlider from "~/components/QuestionSlider.vue";
import QuestionYesNo from "~/components/QuestionYesNo.vue";

</script>

<style scoped>

</style>
