<template>
    <v-container class="d-flex justify-center">

      <v-col cols="12" class="mb-8" lg="6">
          <v-sheet class="mb-10 pt-10 rounded-xl " elevation="10">
              <v-row>
                  <v-col cols->
                  <question-slider :text="'Jak moc pracujete s uživateli, kteří navštíví váš web a odejdou z něj?'"></question-slider>
                  </v-col>
                  <v-col>
                  <question-yes-no :text="'Měříte průměrnou cenu za získaný lead?'"></question-yes-no>
                  </v-col>
              </v-row>
              <v-row>
                  <question-yes-no :text="'Využíváte automatizované formáty v PPC systémech?'"></question-yes-no>
                  <question-yes-no :text="'Utrácíte nejméně 10 % vašeho obratu na marketingové aktivity?'"></question-yes-no>
              </v-row>
              <v-row>
                  <question-yes-no :text="'Vylučujete ve vyhledávacích kampaních pravidelně irelevantní vyhledávání klíčová slova?'"></question-yes-no>
                  <question-yes-no :text="'Máte aktivní komunitu (například FB skupinu)?'"></question-yes-no>
              </v-row>
              <v-row>
                  <question-yes-no :text="'Řekli byste, že máte strategii při práci se sociálními sítěmi a publikujete pravidelně?'"></question-yes-no>
                  <question-yes-no :text="'Zapojují se aktivně lidi s vaším obsahem na sociálních sítích (jako například like, komentáře nebo odpovědi?)'"></question-yes-no>
              </v-row>
              <v-row>
                  <question-yes-no :text="'Používáte všechny formáty komunikace na sociálních sítích? (Videa, Stories, Feedové posty, Reels)'"></question-yes-no>
                  <question-yes-no :text="'Vytváříte měsíční obsahové plány?'"></question-yes-no>
              </v-row>
              <v-row>
                  <question-yes-no :text="'Nabízíte hodnotný obsah zdarma výměnou za e-mailovou adresu?'"></question-yes-no>
                  <question-yes-no :text="'Posíláte pravidelně newslettery na svou databázi?'"></question-yes-no>
              </v-row>
              <v-row>
                  <question-yes-no :text="'Pracujete v současné době s e-mailingovým seznam?'"></question-yes-no>
                  <question-yes-no :text="'Máte nastavené automatizované e-mailové kampaně?'"></question-yes-no>
              </v-row>

              <v-row>
                  <v-col class="d-flex justify-center">
                      <nuxt-link :to="{name:'result'}">
                        <v-btn
                                class="me-4"
                                type="submit"
                                rounded
                                color="primary"
                                variant="tonal"
                                size="large"
                        >Odeslat</v-btn>
                      </nuxt-link>
                  </v-col>
              </v-row>
          </v-sheet>
      </v-col>
    </v-container>
</template>


<script lang="ts" setup>

</script>



<style scoped>

</style>
