<template>
    <v-app>
        <Question :question="useQuestionStore().getCurrentQuestion()"/>
    </v-app>
</template>

<script setup lang="ts">
    import {useQuestionStore} from "~/store/questionStore";
    import Question from "~/components/newVersion/Question.vue";

    const {useUserStore} = await import("~/store/userStore")
    const userStore = useUserStore()

    // todo
    // console.log("is active 1")
    // if (!userStore.isTokenActive()) {
    //     console.log("verify")
    //     await userStore.verifyJWT(localStorage.getItem("token"))
    //     console.log("is active 2")
    //     if (!userStore.isTokenActive()) {
    //         console.log("push")
    //         useRouter().push({path:'/'})
    //     }
    // }



</script>

<style scoped>

</style>
