<template>
    <v-container fluid class="fill-height h-screen d-flex flex-column justify-space-between pa-6">
        <v-row class="w-100">
            <!-- back button -->
            <v-col cols="6" class="d-flex justify-start">
                <nuxt-link :to="{name: 'form'}" >
                    <v-btn icon="mdi-keyboard-backspace" color="primary-lighten-2"></v-btn>
                </nuxt-link>
            </v-col>
            <!-- logo TODO nuxt images -->
            <v-col cols="6" class="d-flex justify-end">
                <img src="assets/images/logo.png"  alt="logo leads town"/>
            </v-col>
        </v-row>

        <v-row class="w-100 ma-0 text-primary" align="center" justify="center">
            <v-col cols="12" md="8" lg="6" class="d-flex flex-column align-center">
                <!-- question -->
                <v-col cols="12">
                    <p class="text-h4 text-sm-h3 text-center font-weight-black">
                        Pracujete s obsahovým plánem na rok dopředu?
                    </p>
                </v-col>
                <!-- question yes or no -->
                <v-col v-if="questionType" cols="12" sm="8" md="6" lg="5" class="d-flex justify-center my-5">
                    <v-row justify="center">
                        <v-col cols="7" sm="6">
                            <v-btn block color="primary" size="x-large" class="text-lowercase font-weight-bold rounded-pill">
                                ano
                            </v-btn>
                        </v-col>
                        <v-col cols="7" sm="6">
                            <v-btn block color="primary" size="x-large" class="text-lowercase font-weight-bold rounded-pill">
                                ne
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
                <!-- question slider -->
                <v-col v-else cols="12" sm="10" class="my-5">
                    <v-row>
                        <v-col cols="12">
                            <v-slider
                                    color="primary-lighten-1"
                                    min="1"
                                    max="10"
                                    step="1"
                                    show-ticks
                                    thumb-label
                                    elevation="16"
                                    thumb-size="24"
                                    track-size="6"
                            ></v-slider>
                        </v-col>
                        <v-col cols="12" class="d-flex justify-center">
                            <v-btn color="primary-lighten-1" size="x-large" prepend-icon="mdi-check" class="text-lowercase font-weight-bold rounded-pill">
                                potvrdit
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-col>
        </v-row>

        <v-row class="w-100 text-primary-lighten-2  text-h6">
            <!-- contact -->
            <v-col cols="6" class="d-flex justify-start align-end">
                <p>hi@lead.town</p>
            </v-col>
            <!-- question number -->
            <v-col cols="6" class="d-flex justify-end align-end">
                <p>03</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">

import Question from "~/components/newVersion/Question.vue";

    const questionType = true


    interface Props {
        question: QuestionInfo
    }
    const props = defineProps<Props>()

</script>

<style scoped>


</style>
