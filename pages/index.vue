<template>
  <Auth/>
</template>

<script setup lang="ts">
  import Auth from "~/components/newVersion/Auth.vue";
  import {useQuestionStore} from "~/store/questionStore";

  const questionStore = useQuestionStore()

  if (questionStore.questionList.length === 0) {
      await questionStore.fetchAllQuestions()
  }

</script>



<style scoped>

</style>
