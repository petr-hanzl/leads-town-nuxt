<template>
    <v-app>
        <Question :question="useQuestionStore().getCurrentQuestion()"/>
    </v-app>
</template>

<script setup lang="ts">
    import {useQuestionStore} from "~/store/questionStore";
    import Question from "~/components/newVersion/Question.vue";

    const token = localStorage.getItem("token")

    if (token == undefined) {
        useRouter().push({path:'/'})
    }

    const {useUserStore} = await import("~/store/userStore")

    // useUserStore().verifyToken()


</script>

<style scoped>

</style>
