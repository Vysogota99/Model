<template>
    <div class="samples">
        <v-row justify="center">
            <v-col cols="6">
                <br><br>
                <h1 style="font-size: 3rem">SIR</h1>
                <br>
                <p>
              {{SampleP1}}
               </p>

                <br>
                <h2 style="color: #B0B0B0">{{SampleH1}}</h2>
                <br>
                <p>
                    {{SampleP2}}
                </p>
                <br>

                <h2 style="color: #B0B0B0">{{SampleH2}}</h2>
                <br>
                <p>
                    {{SampleP3}}
                </p>
                <p>
                    {{SampleP4}}
                 </p>
                <br>
                <div class="d_container">
                    <div class="img">
                        <img src="./s0.png">
                    </div>
                </div>
                <br>
                <br>


                <p>
                {{SampleP5}}
                </p>
                <br>
                <div class="d_container">
                    <div class="img">
                        <img src="./i0.png">
                    </div>
                </div>
                <br>
                <br>

                <p>
                    {{SampleP6}}
                </p>
                <br>
                <div class="d_container">
                    <div class="img">
                        <img src="./ro.png">
                    </div>
                </div>
                <br>
                <br>


                <p>
                    {{SampleP7}}
                </p>
                <br>
                <div class="d_container">
                    <div class="img">
                        <img src="./betta.png">
                    </div>
                </div>
                <br>
                <br>


                <p>
                    {{SampleP8}}
                </p>
                <br>
                <div class="d_container">
                    <div class="img">
                        <img src="./gamma.png">
                    </div>
                </div>
                <br>
                <br>


<!--                -->
                <br>
                <h2 style="color: #B0B0B0">{{SampleH3}}</h2>
                <br>
                <p>
                    {{SampleP9}}
                </p>
                <br>
                <div class="d_container">
                    <div class="img" style="width: 820px;">
                        <img src="./chart.png">
                    </div>
                </div>
                <br>
                <br>


                <p>
                    {{SampleP10}}
                </p>
                <br>
                <div class="d_container">
                    <div class="img">
                        <img src="./B0.png">
                    </div>
                </div>
                <br>
                <br>


                <p>
                    {{SampleP11}}
                </p>
                <br>
                <div class="d_container">
                    <div class="img">
                        <img src="./D.png">
                    </div>
                </div>
                <br>
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
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapGetters(['SampleP1','SampleP2','SampleP3','SampleP4','SampleP5','SampleP6','SampleP7','SampleP8','SampleP9','SampleP10','SampleP11','SampleH1','SampleH2','SampleH3', 'test'])
        }
    }
</script>

<style scoped>
    span{
        font-weight: bold;
    }
    .d_container{
        width: 100%;
    }
    .img{
        width: 410px;
        margin: 0 auto;
    }
    img{
        width: 100%;
    }
    .samples{
    }
</style>