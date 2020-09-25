import Vue from 'vue'
import Vuex from 'vuex'
import api from './api.js'
import favourite from './favourite.js'

Vue.use(Vuex)

import { movieDB_api_key } from '@/config.js'

export default new Vuex.Store({

  state: {
  	list: [],
  	movieDB_api_key: movieDB_api_key,
  },

  mutations: {

  },

  actions: {
  },

  modules: {
  	api: api,
    favourite: favourite
  }

})
