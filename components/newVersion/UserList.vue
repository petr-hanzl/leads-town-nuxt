<template>
    <v-card
            class="mx-auto"
            max-width="600"
    >
        <v-list v-for="user in userStore.userList">
            <nuxt-link to="/" style="text-decoration: none; color: inherit;">
                <v-list-item :title="user.email" />
            </nuxt-link>
        </v-list>
    </v-card>
</template>

<script setup lang="ts">
  import {useUserStore} from "~/store/userStore"
  const userStore = useUserStore()

  await userStore.fetchAllUsers()

</script>

<style scoped>

</style>
