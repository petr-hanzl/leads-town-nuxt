<template>
    <v-app>
        <Chart/>
    </v-app>
</template>

<script setup lang="ts">
    import Chart from "~/components/newVersion/Chart.vue";
    definePageMeta({
        middleware: 'auth'
    })
</script>
<style scoped>

</style>
