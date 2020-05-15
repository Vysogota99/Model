<template>
    <v-container>
        <v-col>
            <v-row>
                <h1>Сравение результатов работы модели SEIR с реальными данными</h1>
            </v-row>
            <v-row>
                <v-col :cols="9" style="padding: 0;">
                    <v-card style="margin-top: 8px;padding: 15px;height: 767px;">
                        <line-chart :chart-data="datacollection" :options="{responsive: true, maintainAspectRatio: true}" :width=500 :height=280></line-chart>
                    </v-card>
                </v-col>
                <v-col :cols="3" style="padding-top: 10px;">
                    <v-card style="padding-left: 10px;margin-bottom: 8px; padding-bottom: 5px;">
                        <v-card-title style="color: #B0B0B0;">Susceptible</v-card-title>
                        <v-card-actions>
                            <v-form
                                    ref="form"
                            >
                                <h2 style="padding-left: 10px;">{{s0}}</h2>
                            </v-form>
                        </v-card-actions>
                    </v-card>
                    <v-card style="padding-left: 10px;margin-bottom: 8px; padding-bottom: 5px;">
                        <v-card-title style="color: #B0B0B0;">Exposed</v-card-title>
                        <v-card-actions>
                            <v-form
                                    ref="form"
                            >
                                <h2 style="padding-left: 10px;">{{e0}}</h2>
                            </v-form>
                        </v-card-actions>
                    </v-card>
                    <v-card style="padding-left: 10px;margin-bottom: 8px; padding-bottom: 5px;">
                        <v-card-title style="color: #B0B0B0;">Infected</v-card-title>
                        <v-card-actions>
                            <v-form
                                    ref="form"
                            >
                                <h2 style="padding-left: 10px;">{{i0}}</h2>
                            </v-form>
                        </v-card-actions>
                    </v-card>
                    <v-card style="padding-left: 10px;margin-bottom: 8px; padding-bottom: 5px;">
                        <v-card-title style="color: #B0B0B0;">Recovered</v-card-title>
                        <v-card-actions>
                            <v-form
                                    ref="form"
                            >
                                <h2 style="padding-left: 10px;">{{r0}}</h2>
                            </v-form>
                        </v-card-actions>
                    </v-card>
                    <v-card style="padding-left: 10px;margin-bottom: 8px; padding-bottom: 5px;">
                        <v-card-title style="color: #B0B0B0;">Betta</v-card-title>
                        <v-card-actions>
                            <v-form
                                    ref="form"
                            >
                                <h2 style="padding-left: 10px;">{{betta}}</h2>
                            </v-form>
                        </v-card-actions>
                    </v-card>
                    <v-card style="padding-left: 10px;margin-bottom: 8px; padding-bottom: 5px;">
                        <v-card-title style="color: #B0B0B0;">Gamma</v-card-title>
                        <v-card-actions>
                            <v-form
                                    ref="form"
                            >
                                <h2 style="padding-left: 10px;">{{gamma}}</h2>
                            </v-form>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    </v-container>
</template>

<script>
    import LineChart from "../../Charts/LineChart/LineChart";
    import {createNamespacedHelpers} from "vuex";
    const {mapActions, mapGetters} = createNamespacedHelpers('seir');

    export default {
        components:{
            LineChart,
        },
        data: () => ({
            datacollection: {},
            x_series: ['02.04', '03.04','04.04','05.04','06.04','07.04','08.04','09.04','10.04','11.04','12.04','13.04','14.04','15.04','16.04','17.04','18.04','19.04','20.04','21.04','22.04','23.04','24.04','25.04','26.04','27.04','28.04','29.04','30.04' ],
            y_series_real_data: [3548, 4149, 4731, 5389, 6343, 7497, 8672, 10131, 11917, 13584, 15770, 18328, 21102, 24490, 27938, 32008, 36793, 42853, 47121, 52763, 57999, 62773, 68622],
        }),
        beforeMount() {
            this.linear_chart();
        },
        mounted() {
            this.fillData();
        },
        computed: {
            ...mapGetters({
                y_series_S: 'get_y_series_S',
                y_series_E: 'get_y_series_E',
                y_series_I: 'get_y_series_I',
                y_series_R: 'get_y_series_R',
            }),
            s0: {
                get() {
                    return this.$store.getters["seir/get_S0"]
                },
                set(value) {
                    this.$store.commit('seir/update_s0', value)
                }
            },
            e0: {
                get() {
                    return this.$store.getters["seir/get_E0"]
                },
                set(value) {
                    this.$store.commit('seir/update_E0', value)
                }
            },
            i0: {
                get() {
                    return this.$store.getters["seir/get_I0"]
                },
                set(value) {
                    this.$store.commit('seir/update_i0', value)
                }
            },
            r0: {
                get() {
                    return this.$store.getters["seir/get_R0"]
                },
                set(value) {
                    this.$store.commit('seir/update_r0', value)
                }
            },
            betta: {
                get() {
                    return this.$store.getters["seir/get_betta"]
                },
                set(value) {
                    this.$store.commit('seir/update_betta', value)
                }
            },
            gamma: {
                get() {
                    return this.$store.getters["seir/get_gamma"]
                },
                set(value) {
                    this.$store.commit('seir/update_gamma', value)
                }
            }
        },
        methods: {
            ...mapActions({
                linear_chart: 'plot'
            }),
            fillData () {
                console.log(this.y_series_E);
                this.datacollection = {
                    labels: this.x_series,
                    datasets: [
                        {
                            borderColor: '#1467e3dd',
                            label: 'Real data',
                            backgroundColor: '#1467e39e',
                            data: this.y_series_real_data,
                        },
                        {
                            borderColor: '#e8278ee1',
                            label: 'SEIR data',
                            backgroundColor: '#e8278eab',
                            data: this.y_series_I,
                        }
                    ]
                }
            },
        }
    }
</script>

<style scoped>

</style>