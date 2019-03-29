
<script>
import axios from "axios";
import Vue from "vue";
export default {
  props: {
    movie: Object
  },
  computed: {
    moviePoster() {
      return `http://image.tmdb.org/t/p/w185${this.movie.poster_path}`;
    }
  }
};
</script>

<template>
  <div class="preview">
    <img :src="moviePoster">
    <div class="details">
      <h2>{{movie.title}}</h2>
      <h3>Raiting: {{movie.vote_average}}</h3>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.preview {
  display: flex;
  padding: 20px;

  .details {
    padding: 20px;
  }
}
</style>