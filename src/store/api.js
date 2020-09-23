import axios from 'axios'
import {movieDB_api_key} from '@/config';

export default ({
  namespaced: true,

  state: {
    api_url: 'https://api.themoviedb.org/3/',
    img_url: 'http://image.tmdb.org/t/p/w500/',
    movieDB_api_key: movieDB_api_key,
    list_genre: [],
  },

  mutations: {
    setListGenre(state, list) {
      state.list_genre = list
    }

  },

  actions: {
    getGenre({commit, state}) {
      axios.get(state.api_url + 'genre/movie/list?api_key=' + movieDB_api_key)
          .then(response => { commit('setListGenre', response.data.genres) })
    }
  },

  getters: {
  }

})