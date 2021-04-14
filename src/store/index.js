import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        headerMenuActive : false,
    },
    mutations:{
        TOGGLE_HEADER_MENU(state){
            state.headerMenuActive = !state.headerMenuActive
        }
    }

})