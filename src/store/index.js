import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import api from './api.js'

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
  	api,
  }

})
