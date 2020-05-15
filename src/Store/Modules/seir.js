export default {
    namespaced: true,
    actions: {
        // eslint-disable-next-line no-unused-vars
        f(context, input){
            let x = input.x
            let beta = context.state.betta;
            let gamma = context.state.gamma;
            let tetta = context.state.tetta;
            let y = [];
            let N = x[0] + x[1] + x[2] + x[3]
            let k = context.state.k;

            y[0] = - beta * x[0] * (x[2] + x[1] * tetta)/N;
            y[1] = beta * x[0]* (x[2] + x[1] * tetta) / N - k * x[1]
            y[2] = k * x[1] - gamma * x[2];
            y[3] = gamma * x[2];

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
                let dE_dt = data[i - 1][1] + dt * (await context.dispatch('f', {x: data[i - 1]}) )[1];
                let dI_dt = data[i - 1][2] + dt * (await context.dispatch('f', {x: data[i - 1]}) )[2];
                let dR_dt = data[i - 1][3] + dt * (await context.dispatch('f', {x: data[i - 1]}) )[3];
                data.push([dS_dt, dE_dt, dI_dt, dR_dt]);
                result[0].push(dS_dt)
                result[1].push(dE_dt)
                result[2].push(dI_dt)
                result[3].push(dR_dt)
            }
            return result;
        },
        async plot(context){
            let I = [0, 29];
            let T = 29;
            let y0 = [context.state.S0, context.state.E0, context.state.I0, context.state.R0];
            let res = await context.dispatch('ode_solve', {
                y0: y0,
                I: I,
                T: T,
            })
            context.commit('update_y_series_S', res[0])
            context.commit('update_y_series_E', res[1])
            context.commit('update_y_series_I', res[2])
            context.commit('update_y_series_R', res[3])
        }
    },
    mutations: {
        update_y_series_E: (state, payload) => {
            state.y_series_E = payload;
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
        update_e0: (state, payload) => {
            state.E0 = payload;
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
        S0: 144500000,
        I0: 3283,
        R0: 0,
        E0: 0.13 * 3283,
        betta: 0.219,
        gamma: 0.0102,
        tetta: 0.6,
        k: 0.333,
        y_series_S: [],
        y_series_I: [],
        y_series_R: [],
        y_series_E: [],
    },
    getters: {
        get_S0: state => {
            return state.S0;
        },
        get_E0: state => {
            return state.E0;
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
        get_y_series_E: state => {
            return state.y_series_E;
        },
        get_y_series_I: state => {
            return state.y_series_I;
        },
        get_y_series_R: state => {
            return state.y_series_R;
        },
    },
}