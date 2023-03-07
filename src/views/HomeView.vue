<template>
  <main>
    <h1 class="title">Had a bad day? Have a joke! &#128523;</h1>
    <div class="container">
      <div class="container__joke" v-for="joke in jokes" :key="joke.id">
        <span>{{ joke.joke }}</span>
        <div class="container__fav_btn">
          <span>&#9733;</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">

type Flags = {
  explicit: boolean
  nsfw: boolean
  political: boolean
  racist: boolean
  religious: boolean
  sexist: boolean
}

type Jokes = {
  category: string
  flags: Flags[]
  id: number
  joke: string
  lang: string
  safe: boolean
  type: string
}

type Response = {
  amount: number
  error: boolean
  jokes: Jokes[]
}


  export default {
    data() {
      return {
        jokes: [] as Jokes[]
      };
    },
    methods: {},

    mounted() {
      this.axios.get('https://v2.jokeapi.dev/joke/Programming?type=single&amount=10')
        .then( ( { data }: Response) => this.jokes = [...data.jokes])

    },
  };
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .container__joke {
    display: flex;
    padding: 10px;
    background-color: rgb(18 72 43);
    border: 1px solid rgb(182, 180, 180);
    border-radius: 7px;
  }

    .container__joke:hover {
      opacity: 0.8;
    }

  .container__fav_btn {
    margin-left: auto;
    padding-left: 10px;
    align-self: center;
    font-size: 2rem;
    transition: 0.7s;
    cursor: pointer;
  }

  .container__fav_btn:hover{
    color: rgb(187, 151, 34);
  }

  .title {
    text-align: center;
    padding: 20px;
    color: rgb(178, 182, 181);
  }
</style>
