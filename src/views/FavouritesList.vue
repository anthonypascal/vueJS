<template>
    <div class="row">
        <CardMovie v-for="(movie, index) in this.list_favourite" :key="index" :movie="movie" :needMissingGenre="false"></CardMovie>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import CardMovie from "@/components/CardMovie"
    export default {
        name: "FavouritesList",
        components: {CardMovie},

        computed: {
            ...mapState({
                list_favourite: state => state.favourite.list_favourite,
            }),
        },
        created(){
            console.log(this.list_favourite)
        }
    }
</script>

<style scoped>

</style>