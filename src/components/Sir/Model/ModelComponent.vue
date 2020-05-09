<template>
<!--    <v-content style="padding-top: 0; padding-bottom: 0;">-->
    <v-container>
        <v-row>
            <v-col>
                <v-row>
                    <v-card class="mr-2" min-width="250">
                        <v-card-title style="color: #B0B0B0">Basic reproduction number</v-card-title>
                        <v-card-text class="text--primary">
                            <p style="font-size: 50px">{{b0}}</p>
                        </v-card-text>
                    </v-card>

                    <v-card class="mr-2" min-width="250">
                        <v-card-title style="color: #B0B0B0">Average days to recover from infectious</v-card-title>
                        <v-card-text class="text--primary">
                            <p style="font-size: 50px">{{d}} </p>
                        </v-card-text>
                    </v-card>

                </v-row>
                <v-row>
                    <v-col :cols="7" style="padding: 0;">
                        <v-card style="margin-top: 8px;padding: 15px">
                            <apexchart width="950" type="line" :options="options" :series="series" style="margin: 0px 0px;"></apexchart>
                        </v-card>
                    </v-col>
                    <v-col :cols="5" style="padding-top: 10px;">

                        <v-row>
                            <v-col :cols="6" style="padding-top: 0; padding-bottom: 5px;">
                                <v-card style="padding-left: 10px;margin-bottom: 8px;">
                                    <v-card-title style="color: #B0B0B0;">Susceptible</v-card-title>
                                    <v-card-actions>
                                        <v-form

                                                ref="form"
                                                v-model="valid"
                                        >
                                            <v-text-field
                                                    v-model="S0"
                                                    :counter="10"
                                                    required
                                            ></v-text-field>
                                        </v-form>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                            <v-col :cols="6" style="padding-top: 0; padding-bottom: 5px; padding-left: 0;">
                                <v-card style="padding-left: 10px;margin-bottom: 8px;">
                                    <v-card-title style="color: #B0B0B0;">Betta</v-card-title>
                                    <v-card-actions>
                                        <v-slider
                                                v-model="b"
                                                class="align-center"
                                                :max="max"
                                                :min="min"
                                                :step="step"
                                                hide-details
                                        >
                                            <template v-slot:append>
                                                <v-text-field
                                                        v-model="b"
                                                        class="mt-0 pt-0"
                                                        hide-details
                                                        single-line
                                                        type="number"
                                                        style="width: 60px"
                                                ></v-text-field>
                                            </template>
                                        </v-slider>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col :cols="6" style="padding-top: 0; padding-bottom: 5px;">
                                <v-card style="padding-left: 10px;margin-bottom: 8px;">
                                    <v-card-title style="color: #B0B0B0;">Infected</v-card-title>
                                    <v-card-actions>
                                        <v-slider
                                                v-model="I0"
                                                class="align-center"
                                                :max="max"
                                                :min="min"
                                                :step="step"
                                                :color="ex1.color"
                                                hide-details
                                        >
                                            <template v-slot:append>
                                                <v-text-field
                                                        v-model="i_0_counter"
                                                        class="mt-0 pt-0"
                                                        hide-details
                                                        single-line
                                                        type="number"
                                                        style="width: 60px"
                                                ></v-text-field>
                                            </template>
                                        </v-slider>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                            <v-col :cols="6" style="padding-top: 0; padding-bottom: 5px;  padding-left: 0;">
                                <v-card style="padding-left: 10px;margin-bottom: 8px;">
                                    <v-card-title style="color: #B0B0B0;">Gamma</v-card-title>
                                    <v-card-actions>
                                        <v-slider
                                                v-model="g"
                                                class="align-center"
                                                :max="max"
                                                :min="min"
                                                :step="step"
                                                hide-details
                                        >
                                            <template v-slot:append>
                                                <v-text-field
                                                        v-model="g"
                                                        class="mt-0 pt-0"
                                                        hide-details
                                                        single-line
                                                        type="number"
                                                        style="width: 60px"
                                                ></v-text-field>
                                            </template>
                                        </v-slider>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>

                        <v-row>
                            <v-col :cols="6" style="padding-top: 0; padding-bottom: 5px;">
                                <v-card style="padding-left: 10px;margin-bottom: 10px;">
                                    <v-card-title style="color: #B0B0B0;">Recovered</v-card-title>
                                    <v-card-actions>
                                        <v-form

                                                ref="form"
                                                v-model="valid"
                                        >
                                            <v-text-field
                                                    v-model="R0"
                                                    :counter="10"
                                                    required
                                            ></v-text-field>
                                        </v-form>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                            <v-col :cols="6" style="padding-top: 0; padding-bottom: 5px; padding-left: 0;" >

                            </v-col>
                        </v-row>




                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
<!--    </v-content>-->

</template>

<script>
    import apexchart from 'vue-apexcharts'
    // import {mapGetters} from 'vuex'
    // import {debounce} from 'lodash'
    export default {
        components: {
            apexchart
        },
        name: "ModelComponent",
        data: () => ({
            dataSusceptible: [],
            dataInfected: [],
            dataRecovered: [],
            range: [],

            S0: 100,
            valid: true,
            self: this,
            ex1: { label: 'color', val: 25, color: 'orange darken-3' },
            I0: 0.01,
            R0: 0,
            b: 0.75,
            g :0.25,
            min: 0,
            max: 1,
            step: 0.01,

            N: 100,
            options: {
                noData: {
                    text: 'Loading...'
                },
                chart: {
                    id: 'vuechart-example',
                    events: {

                    }
                },
                xaxis: {
                    categories: [],
                    labels: {
                        style:{
                            colors: "white",
                        },
                    },
                    tickAmount: 10
                },
                yaxis: {
                    max: 100,
                    labels: {
                        style:{
                            colors: "white",
                        },
                        formatter: function(val) {
                            return val.toFixed(1);
                        }
                    },
                },
                legend:{
                    show: false,
                    labels: {
                        colors: "white",
                    }
                },
                theme: {
                    mode: 'light',
                    palette: 'palette1'
                },
                tooltip:{
                    enabled: true,
                    theme: 'dark',
                    // custom: function() {
                    //     return '<div class="arrow_box">' +
                    //         '</div>'
                    // }
                }
            },
            series: [{
                        name: 'Susceptible',
                        data: []
                    },
                    {
                        name: 'Recovered',
                        data: []
                    },
                    {
                        name: 'Infected',
                        data: []
                    }]
        }),
        computed: {
            S0: function () {
                // return this.$store.getters.get_SO;
                return this.S0
            },
            i_0_counter: function(){
                return this.I0 * this.S0;
            },
            b0: function () {
                return (this.b / this.g).toFixed(1);
            },
            d: function () {
                return (1/this.g).toFixed(1);
            }
        },

        // computed: mapGetters(
        //   [
        //       'get_S0',
        //       'get_i_0_counter',
        //       'get_b0',
        //       'get_d',
        //   ]
        // ),
        methods: {
            create_chart:function(){
                console.log("creating chart");
                let data_ode = this.ode();
                for (let i = 0; i < data_ode.length; i++) {
                    this.dataSusceptible[i] = data_ode[i][0];
                    this.dataInfected[i] = data_ode[i][1];
                    this.dataRecovered[i] = data_ode[i][2];
                    this.range[i] = data_ode[i][3];
                }

                this.series[0].data = this.dataSusceptible;
                this.series[1].data = this.dataRecovered;
                this.series[2].data = this.dataInfected;
                this.options.xaxis.categories = this.range;

            },
            solve_ode: function (y0, I, T, f){
                let data = [y0];
                let dt = (I[1] - I[0]) / T;
                for (let i = 1; i < T; ++i) {
                    let dS_dt = data[i - 1][0] + dt * f(0, data[i - 1])[0];
                    let dI_dt = data[i - 1][1] + dt * f(0, data[i - 1])[1];
                    let dR_dt = data[i - 1][2] + dt * f(0, data[i - 1])[2];
                    data.push([dS_dt, dI_dt, dR_dt, i]);
                }
                return data
            },
            ode: function () {
                let I = [0, 100];
                let T = 100;
                let self = this;

                let f = function (t, x) {
                    let beta = self.b;
                    let gamma = self.g;

                    let y = [];
                    y[0] = - beta * x[0] * x[1]/self.N;
                    y[1] = beta * x[0] * x[1]/self.N - gamma * x[1];
                    y[2] = gamma * x[1];

                    return y;
                }
                let y0 = [this.N, this.i_0_counter, 0];
                return this.solve_ode(y0, I, T, f);

            }
        },

        beforeMount() {
            this.create_chart()
        },

        watch: {
            b(){
                this.create_chart()
            },
            g(){
                this.create_chart()
            },
            I0(){
                this.create_chart()
            },
            R0(){
                this.create_chart()
            }
        }
    }
</script>

<style scoped>
</style>