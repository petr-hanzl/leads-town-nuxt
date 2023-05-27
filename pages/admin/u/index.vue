<template>
    <v-app>
        <UserList/>
    </v-app>
</template>

<script setup lang="ts">
  import UserList from "~/components/newVersion/UserList.vue";
  definePageMeta({
      middleware: 'admin'
  })

</script>

<style scoped>

</style>
