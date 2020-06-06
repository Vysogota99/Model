<template>
  <div class="full_screen">
    <v-container>
      <v-row align="center" justify="center">
        <v-col sm="11" md="6" lg="5" class="p-0">
          <v-card :height="main__card_height" class="mr-4">
            <v-img
              class="white--text align-end"
              :height="main__image_height"
              src="/main/f1ddff1-covid-19-prevention-and-treatment-handbook.png"
            >
              <v-card-title class="grey232323">SIR</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">{{Susceptible}} — {{Infected}} — {{Recovered}}</v-card-subtitle>

            <v-card-text class="text--primary">
              <p>{{HomeSirCard}}</p>
            </v-card-text>

            <v-card-actions>
              <v-btn to="/sir/theory" color="blue" text>{{Go}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col sm="11" md="6" lg="7" class="p-0">
          <v-card :height="main__card_height" class="mr-4">
            <v-img class="white--text align-end" :height="main__image_height" src="main/seir.png"></v-img>

            <v-card-subtitle class="pb-0">{{HomeSeirdCardH}}</v-card-subtitle>

            <v-card-text class="text--primary">
              <p>{{HomeSeirdCardP}}</p>
            </v-card-text>

            <v-card-actions>
              <v-btn to="/seir" color="blue" text>{{test}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col sm="11" md="6" lg="4" class="p-0">
          <v-card :height="main__card_height" class="mr-4 mt-4">
            <v-img class="white--text align-end" :height="main__image_height" src="main/card3.jpg"></v-img>

            <v-card-subtitle class="pb-0">{{HomeTutorialCardH}}</v-card-subtitle>

            <v-card-text class="text--primary">
              <p>{{HomeTutorialCardP}}</p>
            </v-card-text>

            <v-card-actions>
              <v-btn to="/sir/example" color="blue" text>{{Go}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col sm="11" md="6" lg="4" class="p-0">
          <v-card :height="main__card_height" class="mr-4 mt-4">
            <v-img class="white--text align-end" :height="main__image_height" src="main/card4.png"></v-img>

            <v-card-subtitle class="pb-0">{{HomeModelCardH}}</v-card-subtitle>

            <v-card-text class="text--primary">
              <p>{{HomeModelCardP}}</p>
            </v-card-text>

            <v-card-actions>
              <v-btn to="/sir/theory" color="blue" text>{{test}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col sm="11" md="12" lg="4" class="p-0">
          <v-card :height="main__card_height" class="mr-4 mt-4">
            <v-img class="white--text align-end" :height="main__image_height" src="main/card5.jpg"></v-img>

            <v-card-subtitle class="pb-0">{{HomeLocalCardH}}</v-card-subtitle>

            <v-card-text class="text--primary">
              <p>{{HomeLocalCardP}}</p>
            </v-card-text>

            <v-card-actions></v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters([
      "Susceptible",
      "Infected",
      "Recovered",
      "HomeSirCard",
      "Go",
      "test",
      "HomeSeirdCardP",
      "HomeTutorialCardP",
      "HomeModelCardP",
      "HomeLocalCardP",
      "HomeSeirdCardH",
      "HomeTutorialCardH",
      "HomeModelCardH",
      "HomeLocalCardH"
    ])
  },
  name: "HomeComponent",
  data: () => ({
      main__card_height: 525,
      main__image_height: 300
    })
};
</script>

<style scoped>
.grey232323 {
  color: 232323;
}
.p-0{
    padding: 0;
}
.full_screen {
  background-blend-mode: saturation;
  background-attachment: fixed;
  min-height: 100vh;
  background-image: url("home_picture.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  margin: 0px;
  max-width: 100%;
}
</style>
