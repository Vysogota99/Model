import Vue from 'vue'
import Vuex from 'vuex'
import sir from "./Modules/sir";
import seir from "./Modules/seir";
Vue.use(Vuex)

export  default new Vuex.Store({
    modules: {
        sir,
        seir,
    }
})