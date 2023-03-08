<template>

  <main>
    <h2 class="title">Had a bad day? Have a joke!</h2>
    <button class="bounce" @click="store.getAllJokes">Load other jokes</button>
    <span class="container__msg" v-if="store.loadingAllJokes">Loading...</span>
    <span class="container__msg" v-if="store.allJokesError">Error loading jokes. Please try again.</span>
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
    border-radius: 5px;
    width: 100%;
    gap: 20px;
    padding: 20px;
  }

  .container__joke {
    display: flex;
    align-items: center;
    font-size: 1rem;
    line-height: 1.8;
    min-width: 300px;
    width: 45%;
    min-height: 200px;
    padding: 20px;
    word-break: break-word;
    background-color: #121414;
    color: rgb(204, 198, 198);
    border: 1px solid rgb(182, 180, 180);
    border-radius: 10px;
    opacity: 0.8;
  }

  .container__joke:hover {
    opacity: 0.7;
  }

  .container__msg {
    color: rgb(211, 208, 208);
    padding: 0 10px;
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
    transform: rotate(3deg);
    text-shadow: 10px 10px 25px rgb(255, 254, 250),
    -10px 10px 25px rgb(255, 254, 250),
    -10px -10px 25px rgb(255, 254, 250),
    10px -10px 25px rgb(255, 254, 250);
    font-size: 2rem;
    text-align: center;
    font-weight: 600;
    padding: 30px 10px;
    color: rgb(24, 26, 25);
  }

  @keyframes bounce {
  0% {
    transform: scale(1,1) translate(0px, 0px);
  }
  
  30%{
    transform: scale(1,0.9) translate(0px, 5px); 
  }

  75%{
    transform: scale(1,1.1) translate(0px, -10px); 
  }
  
  100% {
    transform: scale(1,1) translate(0px, 0px);
  }
}

.bounce {
  text-align:center;
  margin:0 auto;
  margin-bottom: 3px;
  padding: 5px 15px;  
  animation: bounce 0.7s infinite;
}

@media screen and (max-width: 700px) {
  .container__joke {
    width: 100%;
  }

  .container {
    padding: 5px 0;
    box-shadow: none;
  }
}

</style>

