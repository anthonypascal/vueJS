<template>
<div class="d-flex flex-row justify-content-center">
	<div v-for="genre in list_genre" :key="genre.id" class="form-check">
	    <input :value="genre.id" type="checkbox" class="form-check-input" id="materialUnchecked">
	    <label class="form-check-label" for="materialUnchecked">{{ genre.name }}</label>
	</div>
	<div class="md-form active-cyan active-cyan-2 mb-3 ml-4">
	  	<input class="form-control" type="text" placeholder="Search" aria-label="Search">
	</div>
</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default {

		computed: {
			...mapState({
				list_genre: state => state.api.list_genre,
			}),
		},

		mounted() {
			this.$store.dispatch("api/getGenre");
		}
	}
</script>