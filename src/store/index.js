import Vue from 'vue'
import Vuex from 'vuex'

import notify from './notify'
import error from './error'
import preloader from './preloader'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notify, preloader, error
  }
})
