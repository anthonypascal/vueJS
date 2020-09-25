<template>
    <router-link :to="{name: 'MovieDetail', params: { movie }} " style="text-decoration: none;">
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="img_url + movie.poster_path" alt="Card image cap">
        <div class="card-body">
            <p v-if="movie.isFavourited">&#9829</p>
            <p class="card-text"> {{ movie.title }} </p>
            <div v-if="needMissingGenre">
                <p>Missing category of your research: </p>
                <div v-for="missing_id in movie.notInGenreIds">{{ list_genre[missing_id].name }}</div>
            </div>
        </div>
    </div>
    </router-link>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "CardMovie",

        props: {
          movie: Object,
            needMissingGenre: Boolean,
        },

        computed: {
            ...mapState({
                list_genre: state => state.api.list_genre,
                img_url: state => state.api.img_url,
            }),
        },
    }
</script>

<style scoped>

</style>