import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/searchmovie',
    name: 'SearchMovie',
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchMovie.vue')
  },
  {
    path: '/searchmovie/moviedetail',
    name: 'MovieDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/MovieDetail.vue'),
    props: true
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: () => import(/* webpackChunkName: "about" */ '../views/FavouritesList.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
