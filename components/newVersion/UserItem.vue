<template>
    <nuxt-link style="text-decoration: none; color: inherit;" :to="`/u/${user.id}`">
        <v-list-item :title="user.email" class="align-self-center" />
    </nuxt-link>

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
