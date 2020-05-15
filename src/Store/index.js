import Vue from 'vue'
import Vuex from 'vuex'
import sir from "./Modules/sir";

Vue.use(Vuex)

export  default new Vuex.Store({
    modules: {
        sir
    }
})