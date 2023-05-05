<template>
    <v-row class="d-flex justify-center">
        <v-col cols="8">
            <p class="text-h4 text-center my-6 text-primary">Výsledky</p>
            <v-sheet elevation="4" class="pa-4 pa-md-10 ma-4 ma-md-16" rounded="xl">
                <v-img :src="picChart" />
            </v-sheet>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
    const picChart = new URL(
        "../static/result-graph.png",
        import.meta.url
    ).href;
</script>
<style scoped>

</style>
