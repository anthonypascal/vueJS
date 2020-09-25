<template>
<div>
	<h1> {{ this.movie.title }} </h1>
	<img style="max-height: 400px" :src="img_url + movie.poster_path"><br />
	<p> {{this.movie.release_date }} </p>
	<br />
	<p style="font-style: italic; font-size: 15pt"> {{ this.movie.overview }}</p>
	<p style="text-align: -webkit-center">
		<a @click="changeFavourites" v-bind:class="buttonClass">
		<span class="heart"></span></a>
	</p>
	<br />
</div>

</template>

<script>

import { mapState } from 'vuex'

export default {
	name: 'MovieDetail',
	props: [ 'movie' ],

	data(){
		return {
			buttonClass: "button",
		}
	},

    computed: {
    	...mapState({
        	img_url: state => state.api.img_url,
    	}),
	},

	created() {
		if (this.movie.isFavourited) {
			this.buttonClass = "button_lover";
		}
	},

	methods: {
		changeFavourites() {
			if (this.buttonClass === "button") {
				this.buttonClass = "button_lover";
			} else {
				this.buttonClass = "button"
			}
			this.$store.dispatch('favourite/addOrRemoveToList', this.movie);
		}
	}
}

</script>

<style>
:root {
  --pink: #ec4989;
  --dark-pink: #a12355;
  --light-grey: #f3f3f3;
  --dark-grey: #cecece;
  --button-width: 80px;
  --button-height: 80px;
  --heart-size: 20px;
}
* {
  padding: 0;
  margin: 0;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
}


.button {
  width: var(--button-width);
  height: var(--button-height);
  border-radius: 15px;
  background: var(--light-grey);
  box-shadow: var(--dark-grey) 0 15px 0 0;
  border: 0;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in;
  margin-top: 20px;
}
.button:active {
  background: var(--pink);
  box-shadow: var(--dark-pink) 0 5px 0 0;
  transform: translateY(10px);
}

.button_lover {
	width: var(--button-width);
	height: var(--button-height);
	border-radius: 15px;
	background: var(--light-grey);
	border: 0;
	outline: none;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.2s ease-in;
	margin-top: 20px;

	background: var(--pink);
	box-shadow: var(--dark-pink) 0 5px 0 0;
	transform: translateY(10px);
}

.heart {
  width: var(--heart-size);
  height: var(--heart-size);
  transform: rotate(45deg);
  background: var(--dark-grey);
  top: 5px;
  position: relative;
  display: flex;
  transition: 0.2s ease-in;
}
.button:hover > .heart {
  background: var(--pink);
}
.button:active > .heart {
  background: white;
}
.heart::before,
.heart::after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: inherit;
  position: absolute;
}
.heart::before {
  left: -50%;
}
.heart::after {
  top: -50%;
}	
</style>