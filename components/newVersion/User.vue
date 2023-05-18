<template>
  <!--  info about u  -->
  <v-card class="mx-auto">
      <v-list>
          <v-list-item :title="props.user.firstName"/>
          <v-list-item :title="props.user.lastName"/>
          <v-list-item :title="props.user.email"/>
      </v-list>
  </v-card>

  <!--  answers  -->
  <v-card class="mx-auto">
      <v-list>
          <v-list-item v-for="answer in props.user.answerSet" :title="answer.question.questionText" rounded="xl">
            <p>
                {{answer.answerValue}}
            </p>

          </v-list-item>
      </v-list>
  </v-card>

  <!--  result  -->
  <v-card class="mx-auto">
      <v-list>
          <v-list-item v-for="result in props.user.resultSet"  rounded="xl">
              <p>
                  PPC: {{result.ppc}}
              </p>
              <p>
                  Emailing: {{result.emailing}}
              </p>
              <p>
                  Sociální Sítě: {{result.social_networks}}
              </p>
          </v-list-item>
      </v-list>
  </v-card>


</template>

<script setup lang="ts">

  import {UserInfo} from "~/store/userStore";

  interface Props {
      user: UserInfo
  }
  const props = defineProps<Props>()
</script>

<style scoped>

</style>
