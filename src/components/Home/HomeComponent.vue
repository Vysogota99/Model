<template>
    <div class="home">
        <v-content>
            <v-container>
                <div>
                <v-row>
                    <v-col cols="12">
                        <v-row align="center" justify="center">
                            <v-card
                                    max-width="400"
                                    height="500"
                                    class="mr-4"
                            >
                                <v-img
                                        class="white--text align-end"
                                        height="300px"
                                        src="https://img.pravda.com/images/doc/f/1/f1ddff1-covid-19-prevention-and-treatment-handbook.png"
                                >
                                    <v-card-title style="color: #232323">SIR</v-card-title>
                                </v-img>

                                <v-card-subtitle class="pb-0">{{Susceptible}} — {{Infected}} — {{Recovered}}</v-card-subtitle>

                                <v-card-text class="text--primary">
                                <p>
                                    {{HomeSirCard}}
                                </p>
                                </v-card-text>

                                <v-card-actions>
                                    <v-btn
                                            to="/sir/theory"
                                            color="blue"
                                            text
                                    >
                                        {{Go}}
                                    </v-btn>
                                </v-card-actions>
                            </v-card>

                            <v-card
                                    width="820"
                                    height="500"
                                    class="mr-4"
                            >
                                <v-img
                                        class="white--text align-end"
                                        height="300px"
                                        src="/seir.png"
                                >
                                    <v-card-title style="color: #232323">SEIR</v-card-title>
                                </v-img>

                                <v-card-subtitle class="pb-0">{{HomeSeirdCardH}}</v-card-subtitle>

                                <v-card-text class="text--primary">
                                <p>
                                {{HomeSeirdCardP}}
                                </p>
                                </v-card-text>

                                <v-card-actions>
                                    <v-btn
                                            to="/seird"
                                            color="blue"
                                            text
                                    >
                                        {{test}}
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-row>
                        <v-row align="center" justify="center">
                            <v-card
                                    max-width="400"
                                    height="500"
                                    class="mr-4 mt-4"
                            >
                                <v-img
                                        class="white--text align-end"
                                        height="300px"
                                        src="/card3.jpg"
                                >
                                </v-img>

                                <v-card-subtitle class="pb-0">{{HomeTutorialCardH}}</v-card-subtitle>

                                <v-card-text class="text--primary">
                                    <p>
                                        {{HomeTutorialCardP}}
                                    </p>
                                </v-card-text>

                                <v-card-actions>
                                    <v-btn
                                            to="/sir/example"
                                            color="blue"
                                            text
                                    >
                                        {{Go}}
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                            <v-card
                                    max-width="400"
                                    height="500"
                                    class="mr-4 mt-4"
                            >
                                <v-img
                                        class="white--text align-end"
                                        height="300px"
                                        src="card4.png"
                                >
                                    <v-card-title style="color: #232323">SIR</v-card-title>
                                </v-img>

                                <v-card-subtitle class="pb-0">{{HomeModelCardH}}</v-card-subtitle>

                                <v-card-text class="text--primary">
                                    <p>
                                        {{HomeModelCardP}}
                                    </p>
                                </v-card-text>

                                <v-card-actions>
                                    <v-btn
                                            to="/sir/theory"
                                            color="blue"
                                            text
                                    >
                                        {{test}}
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                            <v-card
                                    max-width="400"
                                    height="500"
                                    class="mr-4 mt-4"
                            >
                                <v-img
                                        class="white--text align-end"
                                        height="300px"
                                        src="/card5.jpg"
                                >
                                    <v-card-title style="color: #232323"></v-card-title>
                                </v-img>

                                <v-card-subtitle class="pb-0">{{HomeLocalCardH}}</v-card-subtitle>

                                <v-card-text class="text--primary">
                                    <p>
                                        {{HomeLocalCardP}}
                                    </p>
                                </v-card-text>

                                <v-card-actions>
                                </v-card-actions>
                            </v-card>
                        </v-row>
                    </v-col>
                </v-row>
                </div>
            </v-container>
        </v-content>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        computed: {
          ...mapGetters(['Susceptible', 'Infected', 'Recovered', 'HomeSirCard', 'Go', 'test', 'HomeSeirdCardP', 'HomeTutorialCardP','HomeModelCardP','HomeLocalCardP','HomeSeirdCardH','HomeTutorialCardH','HomeModelCardH','HomeLocalCardH'])
        },
        name: "HomeComponent"
    }
</script>

<style scoped>

    .home{
        background-blend-mode: saturation;
        background-attachment: fixed;
        min-height: 100vh;
        background-image:url("home_picture.jpg");
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover; /* Resize the background image to cover the entire container */
    }

</style>
