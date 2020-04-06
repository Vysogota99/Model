<template>
<!--    <v-content style="padding-top: 0; padding-bottom: 0;">-->
    <v-container>
        <v-row>
            <v-col>
                <v-row>
                    <v-card class="mr-2">
                        <v-card-title style="color: #B0B0B0">Susceptible</v-card-title>
                        <v-card-text class="text--primary">
                            <p style="font-size: 50px">60123</p>
                        </v-card-text>
                    </v-card>

                    <v-card class="mr-2">
                        <v-card-title style="color: #B0B0B0">Infected</v-card-title>
                        <v-card-text class="text--primary">
                            <p style="font-size: 50px">1200 </p>
                        </v-card-text>
                    </v-card>

                    <v-card class="mr-2">
                        <v-card-title style="color: #B0B0B0;">Recovered</v-card-title>
                        <v-card-text class="text--primary">
                            <p style="font-size: 50px">594</p>
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
    export default {
        components: {
            apexchart
        },
        name: "ModelComponent",
        data: () => ({
            valid: true,
            ex1: { label: 'color', val: 25, color: 'orange darken-3' },
            S0: 100,
            I0: 0.1,
            R0: 0,
            b: 0.1,
            g :0.1,
            min: 0,
            max: 1,
            step: 0.01,
            range: [-20, 70],
            N: 100,
            options: {
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
            },
            series: [{
                name: 'series-1',
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            },
                {
                    name: 'series-2',
                    data: [40, 30, 95, 20, 19, 40, 80, 91]
                },
                {
                    name: 'series-3',
                    data: [32, 42, 41, 40, 29, 65, 60, 92]
                }
            ]
        }),
        computed: {
            i_0_counter: function(){
                return this.I0 * this.S0;
            }
        },
        methods: {
            solve_ode: function (y0, I, T, f){
                let data = [y0];
                let dt = (I[1] - I[0]) / T;
                for (let i = 1; i < T; ++i) {
                    let dS_dt = data[i - 1][0] + dt * f(0, data[i - 1])[0];
                    let dI_dt = data[i - 1][1] + dt * f(0, data[i - 1])[1];
                    let dR_dt = data[i - 1][2] + dt * f(0, data[i - 1])[2];
                    data.push([dS_dt, dI_dt, dR_dt]);
                }
                return data
            },
            ode: function () {
                let I = [0, 100];
                let T = 1000;
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
                let y0 = [this.N, 0.01 * this.N, 0];
                return this.solve_ode(y0, I, T, f);

            }
        },
    }
</script>

<style scoped>
</style>