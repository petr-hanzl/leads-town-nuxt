<template>
    <v-container class="fill-height">
        <v-row class="h-50" justify="center">
            <Bar :data="data" />
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
    import { Bar } from 'vue-chartjs'
    import { useTheme } from "vuetify";
    import { Chart, registerables } from 'chart.js';
    Chart.register(...registerables)

    const data = {
      labels: [
        'PPC',
        'Sociální sítě',
        'Emailing',
      ],
      datasets: [
        {
            label: 'Výsledek',
            backgroundColor:
                [
                    useTheme().current.value.colors.primary,
                    useTheme().current.value.colors.error,
                    useTheme().current.value.colors.secondary,
                ],
            data: [12, 39, 10, 70, 39]
        }
      ]
    }

</script>

<style scoped>

</style>
