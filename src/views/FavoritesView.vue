<template>

  <h2 class="title">My Favorite Jokes <span class="fav_ico">&#9733;</span></h2>
  <div class="container">
    <span class="container__msg" v-if="!store.favoriteJokes.length">No favorite jokes added yet!</span>
    <div class="container__joke" v-for="joke in store.favoriteJokes" :key="joke.id">
      <span>{{ joke.joke }}</span>
      <div class="container__remove_btn">
        <span @click="() => store.removeJoke(joke.id)">x</span>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
  import { store } from '../stores/jokes'

export default {
  data() {
    return {
      store
    };
  },

  methods: {},

  mounted() {},
};

</script>

<style>

.container__remove_btn {
  margin-left: auto;
  padding-left: 10px;
  align-self: center;
  font-size: 2rem;
  transition: 0.7s;
  cursor: pointer;
  color: rgb(121, 8, 8);
}

.container__remove_btn:hover {
  color: rgb(126, 60, 60);
}

.container__msg {
  text-align: center;
}

.title .fav_ico {
  color: orange;
}

</style>
