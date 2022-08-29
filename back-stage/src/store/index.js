import Vue from 'vue'
import VUex from 'vuex'
import tab from './tab'

Vue.use(VUex)

export default new VUex.Store({
    modules:{
        tab
    }
})