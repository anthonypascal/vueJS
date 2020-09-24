<template>
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" :src="img_url + movie.poster_path" alt="Card image cap">
        <div class="card-body">
            <p class="card-text"> {{ this.movie.title }} </p>
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
                img_url: state => state.api.img_url,
            }),
        },
    }
</script>

<style scoped>

</style>