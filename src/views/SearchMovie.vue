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
		<div v-for="movie in result_search_by_genre">
			<p>{{ movie.title }}</p>
		</div>
	</div>
</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {

		computed: {
			...mapState({
				list_genre: state => state.api.list_genre,
				result_search_by_genre: state => state.api.result_search_by_genre
			}),
		},

		mounted() {
			this.$store.dispatch("api/getGenre");
		},

		methods: {
			searchByGenre() {
				this.$store.dispatch("api/getMovieByGenre")
			}
		}
	}
</script>