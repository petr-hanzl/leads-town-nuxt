
<template>
    <ShowResults/>
</template>
<script setup lang="ts">
    definePageMeta({
        middleware: 'auth'
    })

    import ShowResults from "~/components/newVersion/ShowResults.vue";


</script>
<style scoped>

</style>
