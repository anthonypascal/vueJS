import axios from 'axios'
import {movieDB_api_key} from '@/config';

export default ({
  namespaced: true,

  state: {
    api_url: 'https://api.themoviedb.org/3/',
    img_url: 'http://image.tmdb.org/t/p/w500/',
    movieDB_api_key: movieDB_api_key,
    list_genre: [],
    result_search_by_genre: []
  },

  mutations: {
    setListGenre(state, list) {
      state.list_genre = list
    }

  },

  actions: {
    getGenreList({commit, state}) {
      axios.get(state.api_url + 'genre/movie/list?api_key=' + movieDB_api_key)
          .then(response =>
          {
            var temp_list = response.data.genres;
            for (var i = 0; i < temp_list.length; i++) {
              temp_list[i].check = false;
            }

            commit('setListGenre', temp_list)
          }
          )
    },

    getMovieListByGenre({commit, state}) {
      var list_id = []
      for(var i = 0; i < state.list_genre.length; i++) {
          if (state.list_genre[i].check) {
              list_id.push(state.list_genre[i].id)
          }
      }
      axios.get(state.api_url + 'discover/movie?api_key=' + movieDB_api_key + '&with_genres=' + list_id.join('|'))
          .then(response => {state.result_search_by_genre = response.data.results})
    }
  },

  getters: {
  }

})