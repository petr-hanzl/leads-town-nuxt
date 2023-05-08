<template xmlns="http://www.w3.org/1999/html">
    <v-container fluid class="fill-height h-screen d-flex flex-column justify-space-between pa-6">
        <v-row class="w-100">
            <!-- back button -->
            <v-col cols="6" class="d-flex justify-start">
                <div v-if="questionStore.currentPosition() !== 0">
                    <v-btn @click="previousQuestion()" icon="mdi-keyboard-backspace" color="primary-lighten-2"/>
                </div>
            </v-col>
            <!-- logo TODO nuxt images -->
            <v-col cols="6" class="d-flex justify-end">
                <nuxt-img src="/logo.png"  alt="leads town"/>
            </v-col>
        </v-row>

        <v-row class="w-100 ma-0 text-primary" align="center" justify="center">
            <v-col cols="12" md="8" lg="6" class="d-flex flex-column align-center">
                <!-- question -->
                <v-col cols="12">
                    <p class="text-h4 text-sm-h3 text-center font-weight-black">
                        {{ question.questionText }}
                    </p>
                </v-col>
                <!-- question yes or no -->
                <v-col v-if="question.answerCategory.value === 'True/False'" cols="12" sm="8" md="6" lg="5" class="d-flex justify-center my-5">
                    <v-row justify="center">
                        <v-col cols="7" sm="6">
                            <v-btn @click="setYes()" block color="primary" size="x-large" class="text-lowercase font-weight-bold rounded-pill">
                                ano
                            </v-btn>
                        </v-col>
                        <v-col cols="7" sm="6">
                            <v-btn @click="setNo()" block color="primary" size="x-large" class="text-lowercase font-weight-bold rounded-pill">
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
                                v-model="slideValue"
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
                            <v-btn @click="setValue()" color="primary-lighten-1" size="x-large" prepend-icon="mdi-check" class="text-lowercase font-weight-bold rounded-pill">
                                <div v-if="questionStore.getNumberOfQuestions != route.params.id+1">potvrdit</div>
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
                <p>{{+route.params.id+1}}/{{questionStore.getNumberOfQuestions}}</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import {useQuestionStore, QuestionsInfo} from "~/store/questionStore";
import {useAnswerStore} from "~/store/answerStore";

    const route = useRoute();
    const router = useRouter();

    const questionStore = useQuestionStore()
    const answerStore = useAnswerStore()

    console.log(+route.params.id+1)
    console.log(questionStore.getNumberOfQuestions)

    interface Props {
        question: QuestionsInfo
    }

    const props = defineProps<Props>()

    let slideValue = ref('slideValue')

    const submit = () => {
        // answerStore.setAnswer(props.question.id, +slideValue.value)
        console.log("submit")
    }

    const nextQuestion = () => {
        questionStore.nextPosition()
        if (+route.params.id+1 === questionStore.getNumberOfQuestions) {
            router.push({path:'/submit'})
        } else {

            router.push({ path: `/question/${questionStore.currentPosition()}` })
        }
    }

    const previousQuestion = () => {
        questionStore.previousPosition()
        router.push({ path: `/question/${questionStore.currentPosition()}` })
    }
    const setYes = () => {
        // answerStore.setAnswer(props.question.id, 1)
        nextQuestion()
    }

    const setNo = () => {
        // answerStore.setAnswer(props.question.id, 0)
        nextQuestion()

    }

    const setValue = () => {
        // answerStore.setAnswer(props.question.id, +slideValue.value)
        nextQuestion()

    }



</script>

<style scoped>


</style>
