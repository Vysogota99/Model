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

                                <v-card-subtitle class="pb-0">Susceptible — Infected — Recovered</v-card-subtitle>

                                <v-card-text class="text--primary">
                                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, sequi.</div>

                                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut enim, illo inventore labore ullam voluptatibus.</div>
                                </v-card-text>

                                <v-card-actions>
                                    <v-btn
                                            to="/sir/model"
                                            color="blue"
                                            text
                                    >
                                        Подробнее
                                    </v-btn>
                                </v-card-actions>
                            </v-card>

                            <v-card
                                    max-width="400"
                                    height="500"
                                    class="mr-4"
                            >
                                <v-img
                                        class="white--text align-end"
                                        height="300px"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVlzk1ZhiJ1JUEpto-e3oFfv2ehAX-ENiHKxwHAR_d-LRlS6AY&usqp=CAU"
                                >
                                    <v-card-title style="color: #232323">SEIR</v-card-title>
                                </v-img>

                                <v-card-subtitle class="pb-0">Susceptible — Infected — Exposed — Recovered</v-card-subtitle>

                                <v-card-text class="text--primary">
                                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae cum doloribus ea, illum maiores nisi quod similique velit veniam!</div>
                                </v-card-text>

                                <v-card-actions>
                                    <v-btn
                                            color="blue"
                                            text
                                    >
                                        Подробнее
                                    </v-btn>
                                </v-card-actions>
                            </v-card>

                            <v-card
                                    max-width="400"
                                    height="500"
                                    class="mr-4"
                            >
                                <v-img
                                        class="white--text align-end"
                                        height="300px"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTVlzk1ZhiJ1JUEpto-e3oFfv2ehAX-ENiHKxwHAR_d-LRlS6AY&usqp=CAU"
                                >
                                    <v-card-title style="color: #232323">SEIR</v-card-title>
                                </v-img>

                                <v-card-subtitle class="pb-0">Susceptible — Infected — Exposed — Recovered</v-card-subtitle>

                                <v-card-text class="text--primary">
                                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae cum doloribus ea, illum maiores nisi quod similique velit veniam!</div>
                                </v-card-text>

                                <v-card-actions>
                                    <v-btn
                                            color="blue"
                                            text
                                    >
                                        Подробнее
                                    </v-btn>
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
    export default {
        name: "HomeComponent"
    }
</script>

<style scoped>

    .home{
        background-blend-mode: saturation;
        background-attachment: fixed;
        height: 100vh;
        background-image:url("home_picture.jpg");
        background-position: center; /* Center the image */
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover; /* Resize the background image to cover the entire container */
    }

</style>
