<template>
<!--    <v-content style="padding-top: 0; padding-bottom: 0;">-->
    <v-container>
        <v-row>
            <v-col>
                <v-row>
                    <v-card class="mr-2" min-width="250">
                        <v-card-title style="color: #B0B0B0">Basic reproduction number</v-card-title>
                        <v-card-text class="text--primary">
                            <p style="font-size: 50px">{{r_0_values}}</p>
                        </v-card-text>
                    </v-card>

                    <v-card class="mr-2" min-width="250">
                        <v-card-title style="color: #B0B0B0">Average days to recover from infectious</v-card-title>
                        <v-card-text class="text--primary">
                            <p style="font-size: 50px">{{d_value}} </p>
                        </v-card-text>
                    </v-card>

                </v-row>
                <v-row>
                    <v-col :cols="7" style="padding: 0;">
                        <v-card style="margin-top: 8px;padding: 15px;height: 650px;">
                            <line-chart :chart-data="datacollection" :options="{responsive: true, maintainAspectRatio: true}" width="500" height="300"></line-chart>
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
                                            <h2>{{s0}}</h2>
                                        </v-form>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                            <v-col :cols="6" style="padding-top: 0; padding-bottom: 5px; padding-left: 0;">
                                <v-card style="padding-left: 10px;margin-bottom: 8px;">
                                    <v-card-title style="color: #B0B0B0;">Betta</v-card-title>
                                    <v-card-actions>
                                        <v-slider
                                                v-model="betta"
                                                class="align-center"
                                                :max="max"
                                                :min="min"
                                                :step="step"
                                                hide-details
                                        >
                                            <template v-slot:append>
                                                <v-text-field
                                                        v-model="betta"
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
                                                v-model="i0"
                                                class="align-center"
                                                :max="s0"
                                                :min="0"
                                                :step="1"
                                                hide-details
                                        >
                                            <template v-slot:append>
                                                <v-text-field
                                                        v-model="i0"
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
                                                v-model="gamma"
                                                class="align-center"
                                                :max="max"
                                                :min="min"
                                                :step="step"
                                                hide-details
                                        >
                                            <template v-slot:append>
                                                <v-text-field
                                                        v-model="gamma"
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
                                        <v-slider
                                                v-model="r0"
                                                class="align-center"
                                                :max="s0"
                                                :min="0"
                                                :step="1"
                                                hide-details
                                        >
                                            <template v-slot:append>
                                                <v-text-field
                                                        v-model="r0"
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
    import LineChart from "../../Charts/LineChart/LineChart";
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex'

    export default {
        components: {
            LineChart
        },
        name: "ModelComponent",
        data: () => ({
            datacollection: {},
            valid: true,
            min: 0,
            max: 1,
            step: 0.01,
        }),
        computed:{
            d_value: function () {
                return (1/this.gamma).toFixed(1);
            },
            r_0_values: function () {
                return (1 - this.gamma/this.betta).toFixed(1);
            },
            ...mapGetters({
                x_series: 'get_x_series',
                y_series_S: 'get_y_series_S',
                y_series_I: 'get_y_series_I',
                y_series_R: 'get_y_series_R',
            }),
            s0: {
                get() {
                    return this.$store.getters.get_S0
                },
                set(value) {
                    this.$store.commit('update_s0', value)
                }
            },
            i0: {
                get() {
                    return this.$store.getters.get_I0
                },
                set(value) {
                    this.$store.commit('update_i0', value)
                }
            },
            r0: {
                get() {
                    return this.$store.getters.get_R0
                },
                set(value) {
                    this.$store.commit('update_r0', value)
                }
            },
            betta: {
                get() {
                    return this.$store.getters.get_betta
                },
                set(value) {
                    this.$store.commit('update_betta', value)
                }
            },
            gamma: {
                get() {
                    return this.$store.getters.get_gamma
                },
                set(value) {
                    this.$store.commit('update_gamma', value)
                }
            }

        },
        methods: {
            ...mapActions({
                linear_chart: 'plot'
            }),

            fillData () {
                this.datacollection = {
                    labels: this.x_series,
                    datasets: [
                        {
                            borderColor: '#1467e3dd',
                            label: 'S',
                            backgroundColor: '#1467e39e',
                            data: this.y_series_S,
                            pointRadius: 2,
                        },
                        {
                            borderColor: '#e8278ee1',
                            label: 'I',
                            backgroundColor: '#e8278eab',
                            data: this.y_series_I,
                            pointRadius: 2,
                            pointStyle: 'rect',
                        },
                        {
                            borderColor: '#27e88be1',
                            label: 'R',
                            backgroundColor: '#27e88b9e',
                            data: this.y_series_R,
                            pointRadius: 2,
                            pointStyle: 'star',
                        },
                    ]
                }
            },
        },

        beforeMount() {
            this.linear_chart();
            this.fillData();
        },
        watch: {
            betta: function () {
                //  пересчет данных
                this.linear_chart();
                // перерисовывание графика
                this.fillData();

            },
            gamma: function () {
                //  пересчет данных
                this.linear_chart();
                // перерисовывание графика
                this.fillData();

            },
            i0: function () {
                //  пересчет данных
                this.linear_chart();
                // перерисовывание графика
                this.fillData();

            },
            r0: function () {
                //  пересчет данных
                this.linear_chart();
                // перерисовывание графика
                this.fillData();

            },
        }
    }
</script>

<style scoped>
</style>