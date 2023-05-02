<template>
    <v-container class="d-flex justify-center">

      <v-col cols="12" class="mb-8" lg="6">
          <v-sheet class="mb-10 pt-10 rounded-xl" elevation="10">
              <v-row>
                  <v-col>
                      <QuestionSlider/>
                  </v-col>
                  <v-col>
                      <QuestionYesNo/>
                  </v-col>
              </v-row>
          </v-sheet>
      </v-col>
    </v-container>
</template>


<script lang="ts" setup>
const query = gql`
  query allQuestions {
    allQuestions{
        questionText,
        questionCategory{
            value
        }
        answerCategory{
            value
        }
    }
  }
`

const { data } = await useAsyncQuery(query)
// const userId = localStorage.getItem('userId')
// localStorage.removeItem('userId')
// console.log(userId)
</script>



<style scoped>

</style>
