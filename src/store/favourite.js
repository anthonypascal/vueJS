export default ({
    namespaced: true,

    state: {
        list_favourite: [],
    },

    mutations: {
        addToList (state, movie) {
            state.list_favourite.push(movie);
        },

        removeFromList (state, index) {
            state.list_favourite.splice(index, 1);
        },

        setList (state, list) {
            state.list_favourite = list;
        }
    },

    actions: {
        addIsFavouritedToList({state}) {
            state.list_favourite.forEach((movie) => {
                movie.isFavourited = true;
            })
        },
        addOrRemoveToList ({commit, dispatch, state}, movie) {
            var wasADelete = false;
            state.list_favourite.forEach((movieInStorage, index) => {
                if (movie.id === movieInStorage.id) {
                    commit('removeFromList', index);
                    wasADelete = true;
                }
            })
            if (!wasADelete) {
                commit('addToList', movie);
            }
            dispatch('setStorage');
        },

        setStorage({state}) {
            localStorage.clear();
            var json_list = JSON.stringify(state.list_favourite);
            localStorage.setItem('list_favourite', json_list);
        },

        getStorage({commit, dispatch}) {
            if (localStorage.getItem('list_favourite') !== 'undefined') {
                commit('setList', JSON.parse(localStorage.getItem('list_favourite')));
                dispatch('addIsFavouritedToList');
            }

        },
    },

    getters: {
    }

})