<template>
    <v-app>
        <v-container class="d-flex justify-center">
          <v-col cols="12" lg="8">
              <v-sheet class="pa-4 pa-sm-7 rounded-xl" elevation="5">
                  <v-row class="d-flex justify-center align-center">
                      <v-col cols="12" sm="6">
                          <QuestionSlider :text="'Jak moc pracujete s uživateli, kteří navštíví váš web a odejdou z něj?'"/>
                      </v-col>
                      <v-col cols="12" sm="6">
                          <QuestionYesNo :text="'Vylučujete ve vyhledávacích kampaních pravidelně irelevantní vyhledávání klíčová slova?'"/>
                      </v-col>
                  </v-row>
                  <v-row class="d-flex justify-center align-center">
                      <v-col cols="12" sm="6">
                          <QuestionYesNo :text="'Utrácíte nejméně 10 % vašeho obratu na marketingové aktivity?'"/>
                      </v-col>
                      <v-col cols="12" sm="6">
                          <QuestionYesNo :text="'Využíváte automatizované formáty v PPC systémech?'"/>
                      </v-col>
                  </v-row>
                  <v-row class="d-flex justify-center align-center">
                      <v-col cols="12" sm="6">
                          <QuestionYesNo :text="'Měříte průměrnou cenu za získaný lead?'"/>
                      </v-col>
                      <v-col cols="12" sm="6">
                          <QuestionYesNo :text="'Řekli byste, že máte strategii při práci se sociálními sítěmi a publikujete pravidelně?'"/>
                      </v-col>
                  </v-row>
                  <v-row class="d-flex justify-center align-center">
                      <v-col cols="12" sm="6">
                          <QuestionYesNo :text="'Máte aktivní komunitu (například FB skupinu)?'"/>
                      </v-col>
                      <v-col cols="12" sm="6">
                          <QuestionYesNo :text="'Zapojují se aktivně lidi s vaším obsahem na sociálních sítích (jako například like, komentáře nebo odpovědi?)'"/>
                      </v-col>
                  </v-row>
                  <v-row class="d-flex justify-center align-center">
                      <v-col cols="12" sm="6">
                          <QuestionYesNo :text="'Používáte všechny formáty komunikace na sociálních sítích? (Videa, Stories, Reels, Feedové posty)'"/>
                      </v-col>
                      <v-col cols="12" sm="6">
                          <QuestionYesNo :text="'Vytváříte měsíční obsahové plány?'"/>
                      </v-col>
                  </v-row>
                  <v-row class="d-flex justify-center align-center">
                      <v-col cols="12" sm="6">
                          <QuestionYesNo :text="'Pracujete v současné době s e-mailingovým seznam?'"/>
                      </v-col>
                      <v-col cols="12" sm="6">
                          <QuestionYesNo :text="'Nabízíte hodnotný obsah zdarma výměnou za e-mailovou adresu?'"/>
                      </v-col>
                  </v-row>
                  <v-row class="d-flex justify-center align-center">
                      <v-col cols="12" sm="6">
                          <QuestionYesNo :text="'Máte nastavené automatizované e-mailové kampaně?'"/>
                      </v-col>
                      <v-col cols="12" sm="6">
                          <QuestionYesNo :text="'Posíláte pravidelně newslettery na svou databázi?'"/>
                      </v-col>
                  </v-row>
                  <v-row class="d-flex justify-center">
                      <nuxt-link :to="{name:'result'}">
                          <v-btn
                              class="ma-4"
                              type="submit"
                              rounded
                              color="primary"
                              variant="tonal"
                              size="x-large"
                          >Odeslat</v-btn>
                      </nuxt-link>
                  </v-row>
              </v-sheet>
          </v-col>
        </v-container>
    </v-app>
</template>

<script setup>

import QuestionSlider from "~/components/QuestionSlider.vue";
import QuestionYesNo from "~/components/QuestionYesNo.vue";

</script>

<style scoped>

</style>
