export default {
    actions: {
        // eslint-disable-next-line no-unused-vars
        f(context, input){
            let x = input.x
            let beta = context.state.betta;
            let gamma = context.state.gamma;

            let y = [];
            let N = x[0] + x[1] + x[2]
            y[0] = - beta * x[0] * x[1]/N;
            y[1] = beta * x[0] * x[1]/N - gamma * x[1];
            y[2] = gamma * x[1];

            return y;
        },
        async ode_solve(context, input){
            let y0 = input.y0;
            let T = input.T;
            let I = input.I;

            let data = [y0];
            let result = [];

            result[0] = [data[0][0]];
            result[1] = [data[0][1]];
            result[2] = [data[0][2]];
            result[3] = [data[0][3]];

            let dt = (I[1] - I[0]) / T;

            for (let i = 1; i < T; ++i) {
                let dS_dt = data[i - 1][0] + dt * (await context.dispatch('f', {x: data[i - 1]}) )[0];
                let dI_dt = data[i - 1][1] + dt * (await context.dispatch('f', {x: data[i - 1]}) )[1];
                let dR_dt = data[i - 1][2] + dt * (await context.dispatch('f', {x: data[i - 1]}) )[2];
                data.push([dS_dt, dI_dt, dR_dt, i]);
                result[0].push(dS_dt)
                result[1].push(dI_dt)
                result[2].push(dR_dt)
                result[3].push(i)
            }
            return result;
        },
        async plot(context){
            let I = [0, 100];
            let T = 100;
            let y0 = [context.state.S0, context.state.I0, context.state.R0, 0];
            let res = await context.dispatch('ode_solve', {
                y0: y0,
                I: I,
                T: T,
            })
            context.commit('update_x_series', res[3])
            context.commit('update_y_series_S', res[0])
            context.commit('update_y_series_I', res[1])
            context.commit('update_y_series_R', res[2])
        }
    },
    mutations: {
        update_x_series: (state, payload) => {
            state.x_series = payload;
        },
        update_y_series_S: (state, payload) => {
            state.y_series_S = payload;
        },
        update_y_series_I: (state, payload) => {
            state.y_series_I = payload;
        },
        update_y_series_R: (state, payload) => {
            state.y_series_R = payload;
        },
        update_s0: (state, payload) => {
            state.S0 = payload;
        },
        update_i0: (state, payload) => {
            state.I0 = payload;
        },
        update_r0: (state, payload) => {
            state.R0 = payload;
        },
        update_betta: (state, payload) => {
            state.betta = payload;
        },
        update_gamma: (state, payload) => {
            state.gamma = payload;
        },
    },
    state: {
        S0: 100,
        I0: 10,
        R0: 0,
        betta: 0.75,
        gamma: 0.25,
        y_series_S: [],
        y_series_I: [],
        y_series_R: [],
        x_series: [],
    },
    getters: {
        get_S0: state => {
            return state.S0;
        },
        get_I0: state => {
            return state.I0;
        },
        get_R0: state => {
            return state.R0;
        },
        get_betta: state => {
            return state.betta;
        },
        get_gamma: state => {
            return state.gamma;
        },
        get_x_series: state => {
            return state.x_series;
        },
        get_y_series_S: state => {
            return state.y_series_S;
        },
        get_y_series_I: state => {
            return state.y_series_I;
        },
        get_y_series_R: state => {
            return state.y_series_R;
        },
    },
}