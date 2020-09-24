<template>
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="img_url + movie.poster_path" alt="Card image cap">
        <div class="card-body">
            <p class="card-text"> {{ movie.title }} </p>
            <div>
                <p>Missing category of your research: </p>
                <div v-for="missing_id in movie.notInGenreIds">{{ list_genre[missing_id].name }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "CardMovie",

        props: {
          movie: Object,
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