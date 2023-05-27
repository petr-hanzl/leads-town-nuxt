<template>
  <v-app>
      <User :user="currentUser"/>
  </v-app>

</template>

<script setup lang="ts">
  import User from "~/components/newVersion/User.vue";
  import {UserInfo} from "~/store/userStore";
  import {useUserStore} from "~/store/userStore";

  const userStore = useUserStore()
  let currentUser: UserInfo

  if (userStore.currentViewedUser) {
      currentUser = userStore.currentViewedUser
  } else {
      useRouter().push({path: "/u"})
  }


</script>

<style scoped>

</style>
