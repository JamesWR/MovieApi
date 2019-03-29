
<script>
import axios from "axios";
import Vue from "vue";
export default {
  components: {},
  data() {
    return {
      searches: [],
      popular: [],
      search: ""
    };
  },
  computed: {
    movies() {
      return this.search ? this.searches[this.search] : this.popular;
    }
  },
  methods: {
    updateSearch({ target: { value } }) {
      if (!this.searches[value]) {
        this.searchGet(value).then(result => {
          this.$set(this.searches, value, result.data.results);
        });
      }
      this.search = value;
    },
    searchGet(query) {
      return axios.get("/api/search", { params: { query } });
    }
  },
  mounted() {
    axios.get("/api/popular").then(movies => {
      this.popular = movies.data.results;
    });
  }
};
</script>

<template>
  <div>
    <input v-model="search" @input="updateSearch">
    <div v-for="movie in movies" :key="movie.id">
      <router-link :to="{ name: 'movie', params: { id: movie.id} }">{{movie.title}} {{movie.id}}</router-link>
    </div>
  </div>
</template>


<style lang="stylus" scoped>
</style>