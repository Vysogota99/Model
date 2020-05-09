import Vue from 'vue'
import Vuex from 'vuex'
import Sir from './Modules/sir'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count ++
        }
    },
    actions: {

    },
    getters: {

    },

    modules: {
        Sir,
    }
})