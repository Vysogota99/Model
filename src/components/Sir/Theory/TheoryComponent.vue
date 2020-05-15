<template>
    <div class="theory">
<!--        <v-content>-->
            <v-row justify="center">
                <v-col cols="6">
                    <br><br>
                    <h1 style="font-size: 3rem">SIR</h1>
                    <h2 style="color: #B0B0B0">{{TheoryTitle1}}</h2>
                    <br>
                    <p>
                    {{TheoryP1}}
                    </p>
                    <ul>
                        <li><b>S</b>usceptible <span v-if="isRus" style="color: #d4d2d2">({{Susceptible}})</span>
                        </li>
                        <li><b>I</b>nfectious
                            <span v-if="isRus" style="color: #d4d2d2">({{Infected}})</span>
                        </li>
                        <li><b>R</b>ecovered
                            <span v-if="isRus" style="color: #d4d2d2">({{Recovered}})</span>
                        </li>
                    </ul>
                    <br>
                    <v-btn
                            color="blue"
                            text
                            to="/sir/model"
                    >
                        {{test}}
                    </v-btn>
                </v-col>
            </v-row>
            <v-row justify="center" style="background-color: #fff;">
                <v-col cols="6">
                    <br><br>
                    <p style="color: #232323">
                        {{TheoryP2}}
                    </p>
                    <br>
                    <v-img
                            src="https://www.lewuathe.com/assets/img/posts/2020-03-11-covid-19-dynamics-with-sir-model/sir.png"
                            height="200"
                            contain
                    ></v-img>
                    <br>
                    <p style="color: #232323">
                        {{TheoryP3}}
                    </p>
                    <br>
                    <v-img
                            src="https://www.lewuathe.com/assets/img/posts/2020-03-11-covid-19-dynamics-with-sir-model/ode.png"
                            height="300"
                            contain
                    ></v-img>
                    <br>
                    <p style="color: #232323">
                        {{TheoryP4}}
                    </p>
                    <br>
                    <br>
                        <img src="./D.png" style="margin-left: 44%">
                    <br>
                    <br>
                    <p style="color: #232323;">
                    {{TheoryP5}}
                    </p>
                    <br>
                    <img src="./R0.png" style="margin-left: 44%">
                    <br>
                    <br>
                    <p style="color: #232323;">
                    {{TheoryP6}}
                    </p>
                 </v-col>

            </v-row>
<!--        </v-content>-->
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        computed: {
          ...mapGetters(['TheoryP1', 'TheoryP2', 'TheoryP3', 'TheoryP4', 'TheoryP5', 'TheoryP6', 'Susceptible', 'Recovered', 'Infected', 'isRus', 'test', 'TheoryTitle1'])
        },
        name: "TheoryComponent"
    }
</script>

<style scoped>
    span{
        font-weight: bold;
    }
.theory{
}
</style>