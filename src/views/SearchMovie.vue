<template>
<div class="justify-content-center">
	<div>
		<div v-for="(genre, index) in list_genre" :key="index" class="form-check">
			<input :value="index" type="checkbox" v-model="list_genre[index].check" class="form-check-input" id="materialUnchecked">
			<label class="form-check-label" for="materialUnchecked">{{ genre.name }}</label>
		</div>
		<button @click="searchByGenre">Apply filter</button>
	</div>
	<div class="md-form active-cyan active-cyan-2 mb-3 ml-4">
	  	<input class="form-control" type="text" placeholder="Search" aria-label="Search">
	</div>
	<div>
		<CardMovie v-for="(movie, index) in result_search_by_genre_sorted" :key="index" :movie="movie"></CardMovie>
	</div>
</div>
</template>

<script>
	import { mapState } from 'vuex'
	import CardMovie from "@/components/CardMovie"
	export default {

		components: {
			CardMovie
		},

		computed: {
			...mapState({
				list_genre: state => state.api.list_genre,
				result_search_by_genre: state => state.api.result_search_by_genre,
				list_favourite: state => state.favourite.list_favourite,
			}),
			result_search_by_genre_sorted: function() {
				return this.sortByGenreNumber(this.result_search_by_genre)
			}
		},

		mounted() {
			this.$store.dispatch("api/getGenreList");
			this.$store.dispatch('favourite/getStorage');
		},

		methods: {

			searchByGenre() {
				this.$store.dispatch("api/getMovieListByGenre")
			},

			sortByGenreNumber(list) {
				var listSelectedGenre = this.getListSelectedGenre()
				if (list === []) {
					return [];
				}
				list.forEach((movie, i) => {
					movie.countMatchingId = 0;
					movie.notInGenreIds = [];
					movie.IsFavourited = false;
					listSelectedGenre.forEach((id, i) => {
						if (movie.genre_ids.includes(id)) {
							movie.countMatchingId++;
						} else {
							movie.notInGenreIds.push(id);
							movie.notInGenreIds = this.matchIds(movie.notInGenreIds);
						}
					})
					this.list_favourite.forEach((favourite, index) => {
						if (movie.id === favourite.id) {
							movie.isFavourited = true;
						}
					})
				})
				list.sort( (a, b) => {
					if (a.countMatchingId < b.countMatchingId) {
						return 1;
					}
					if (a.countMatchingId > b.countMatchingId) {
						return -1;
					}
					return 0;
				})
				return list;
			},

			// Method to match the id from MovieDB with the one in list_genre
			matchIds(list, list_genre) {
				var isFound = false;
				list.forEach((id, index_list) => {
					isFound= false;
					this.list_genre.forEach((genre, index_list_genre) => {
						if (id === genre.id && !isFound) {
							list[index_list] = index_list_genre;
							isFound = true;
						}
					})
				})
				return list;
			},

			getListSelectedGenre() {
				var listSelected = [];
				this.list_genre.forEach(function (genre, i) {
					if (genre.check) {
						listSelected.push(genre.id);
					}
				})
				return listSelected;
			},
		}
	}
</script>