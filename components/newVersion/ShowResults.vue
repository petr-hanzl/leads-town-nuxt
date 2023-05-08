<template xmlns="http://www.w3.org/1999/html">
    <v-container fluid class="fill-height h-screen d-flex flex-column justify-space-between pa-6">
        <v-row class="w-100" justify="end">
            <v-col class="d-flex justify-end" cols="6">
                <nuxt-img alt="leads town" height="15" src="/logo.png"/>
            </v-col>
        </v-row>

        <v-row class="w-100 ma-0 text-primary" align="center" justify="center">
            <v-col cols="12" md="8" lg="6" class="d-flex flex-column align-center">
                <!-- question -->
                <v-col cols="12">
                    <p class="text-h4 text-sm-h3 text-center font-weight-black">
                        Hotovo! Nyní se můžete podívat, jak jste dopadli.
                    </p>
                </v-col>
                <v-col cols="12" sm="10" class="my-5">
                    <v-row>
                        <v-col cols="12" class="d-flex justify-center">
                            <v-btn
                                @click="submit()"
                                class="me-4 text-body-1 text-primary font-weight-bold"
                                type="submit"
                                rounded
                                color="secondary"
                                size="large"
                            >
                                odeslat a zobrazit výsledky
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-col>
        </v-row>

        <v-row class="w-100 text-primary-lighten-2  text-h6">
            <!-- contact -->
            <v-col cols="6" class="d-flex justify-start align-end">
                <p>hi@lead.town</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">

    import {useAnswerStore} from "~/store/answerStore";

    const store = useAnswerStore()

    const submit = () => {
        store.createResult()
        store.saveUserResult()
        useRouter().push({ path: `/result` })
  }
</script>

<style scoped>


</style>
