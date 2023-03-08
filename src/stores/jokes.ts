import { reactive } from 'vue'
import axios from 'axios'
import { toast } from 'vue3-toastify'

export type Flags = {
  explicit: boolean
  nsfw: boolean
  political: boolean
  racist: boolean
  religious: boolean
  sexist: boolean
}

export type Joke = {
  category: string
  flags: Flags
  id: number
  joke: string
  lang: string
  safe: boolean
  type: string
}

export const store = reactive({
  count: 0,
  allJokes: [] as Joke[],
  favoriteJokes: [] as Joke[],
  favoriteIds: [] as number[],
  loadingAllJokes: false,
  loadingFavoriteJokes: false,
  allJokesError: false,
  favoriteJokesError: false,

  getAllJokes() {
    this.loadingAllJokes = true
    axios
      .get('https://v2.jokeapi.dev/joke/Programming?type=single&amount=10')
      .then(({ data }) => {
        this.allJokes = [...data.jokes]
        this.loadingAllJokes = false
      })
      .catch(() => {
        this.loadingAllJokes = false
        this.allJokesError = true
      })
  },

  getFavoriteJokes() {
    this.loadingFavoriteJokes = true
    axios
      .get<Joke[]>('http://localhost:3004/get-jokes')
      .then(({ data }) => {
        this.favoriteJokes = data
        this.favoriteIds = data.map((joke) => joke.id)
        this.loadingFavoriteJokes = false
      })
      .catch(() => {
        this.loadingFavoriteJokes = false
        this.favoriteJokesError = true
      })
  },

  saveJoke(joke: Joke) {
    axios
      .post<Joke>('http://localhost:3004/post-joke', { joke })
      .then(() => this.getFavoriteJokes())

    toast.success('Joke added to favorites.')
  },

  removeJoke(id: number) {
    axios.delete(`http://localhost:3004/delete-joke/${id}`).then(() => {
      this.favoriteJokes = this.favoriteJokes.filter((joke) => joke.id !== id)
      this.getFavoriteJokes()

      toast.warning('Joke removed from favorites.')
    })
  }
})

store.getAllJokes()
store.getFavoriteJokes()
