<template>
    <v-container>
        <v-row>

        </v-row>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                S0: 100,
                I0: 0.1,
                R0: 0,
                b: 0.1,
                g :0.1,
                T:100,
                N:100,
                result: [],
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
        mounted() {
            let data_ode = this.ode();
            let dataSusceptible = [];
            let dataInfected = [];
            let dataRecovered = [];

            for (let i = 0; i < data_ode.length; i++) {
                dataSusceptible[i] = data_ode[i][0];
                dataInfected[i] = data_ode[i][1];
                dataRecovered[i] = data_ode[i][2];
            }
            console.log(dataSusceptible)
        }
    }
</script>