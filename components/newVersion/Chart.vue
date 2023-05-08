<template xmlns="http://www.w3.org/1999/html">
    <v-container fluid class="fill-height h-screen d-flex flex-column justify-space-between pa-6">
        <v-row class="w-100">
            <v-col cols="6" class="d-flex justify-end">
                <nuxt-img src="/logo.png"  alt="leads town"/>
            </v-col>
        </v-row>

        <v-row class="w-100 ma-0 text-primary" align="center" justify="center">
            <v-col cols="12" md="8" lg="6" class="d-flex flex-column align-center">
                <!-- question -->
                <v-col cols="12">
                    <p class="text-h4 text-sm-h3 text-center font-weight-black">
                        Výsledky:
                    </p>
                </v-col>
                <v-container class="fill-height">
                    <v-row class="h-50" justify="center">
                        <Bar :data="data" />
                    </v-row>
                </v-container>
            </v-col>
        </v-row>

        <v-row class="w-100 text-primary-lighten-2  text-h6">
            <!-- contact -->
            <v-col cols="6" class="d-flex justify-start align-end">
                <p>hi@lead.town</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
    import {useAnswerStore} from "~/store/answerStore";
    import { Bar } from 'vue-chartjs'
    import { useTheme } from "vuetify";
    import { Chart, registerables } from 'chart.js';
    Chart.register(...registerables)


    // todo use this when answerStore works
    const l = new Array<string>
    const d = new Array<number>
    useAnswerStore().getResult.forEach((result, category) => {
        l.push(category)
        d.push(result)
    })



    const data = {
      labels: l,
      datasets: [
        {
            label: 'Výsledek',
            backgroundColor:
                [
                    useTheme().current.value.colors.primary,
                    useTheme().current.value.colors.error,
                    useTheme().current.value.colors.secondary,
                ],
            data: d,
        }
      ]
    }

</script>

<style scoped>

</style>
