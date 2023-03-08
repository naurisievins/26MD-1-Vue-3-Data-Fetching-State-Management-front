<template>

  <main>
    <h2 class="title">Had a bad day? Have a joke!</h2>
    <button @click="store.getAllJokes">Load other jokes</button>
    <div class="container">
      <div class="container__joke" v-for="joke in store.allJokes" :key="joke.id">
        <span>{{ joke.joke }}</span>
        <div class="container__fav_btn">
          <span
            v-if="store.favoriteIds.includes(joke.id)"
            class="fav_btn__selected"
            @click="() => store.removeJoke(joke.id)"
          >
            &#9733;
          </span>
          <span 
            v-else @click="() => handleSaveJoke(joke)"
            class="fav_btn__unselected"
          >
            &#9733;
        </span>
        </div>
      </div>
    </div>
  </main>

</template>

<script lang="ts">
  import { store } from '../stores/jokes'
  import type { Joke } from '../stores/jokes';

  export default {
    data() {
      return {
        store,
      };
    },

    methods: {
      handleSaveJoke (joke: Joke) {
        if (!store.favoriteIds.includes(joke.id)) {
          store.saveJoke(joke)
        }
      }
    },

    mounted() {},

  };

</script>

<style>

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 20px;
  }
  .container__joke {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    line-height: 2;
    min-width: 300px;
    width: 45%;
    min-height: 200px;
    padding: 20px;
    word-break: break-word;
    background-color: #C7D3D4FF;
    color: rgb(17, 17, 17);
    border: 1px solid rgb(182, 180, 180);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .container__joke:hover {
    opacity: 0.8;
  }

  .container__fav_btn {
    user-select: none;
    margin-left: auto;
    padding-left: 10px;
    align-self: center;
    font-size: 2rem;
    transition: 0.7s;
    cursor: pointer;
  }

  .fav_btn__unselected:hover {
    color: orange;
  }

  .fav_btn__selected {
    color: orange;
  }

  .fav_btn__selected:hover {
    color: rgba(114, 112, 110, 0.247);
  }

  .title {
    font-size: 2rem;
    text-align: center;
    font-weight: 600;
    padding: 15px 10px;
    color: rgb(24, 26, 25);
  }

@media screen and (max-width: 700px) {
  .container__joke {
    width: 100%;
  }
}

</style>

