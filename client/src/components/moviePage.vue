
<script>
import axios from "axios";
import Vue from "vue";
import _ from "lodash";
export default {
  props: {
    id: String
  },
  components: {},
  data() {
    return {
      movie: {},
      toShow: [
        "budget",
        "homepage",
        "id",
        "imdb_id",
        "original_language",
        "original_title",
        "overview",
        "popularity",
        "poster_path",
        "release_date",
        "revenue",
        "runtime",
        "status",
        "tagline",
        "vote_average",
        "vote_count"
      ]
    };
  },
  computed: {
    displayData() {
      return _.pick(this.movie, this.toShow);
    }
  },
  methods: {},
  mounted() {
    axios.get(`/api/movie/${this.id}`).then(({ data }) => {
      this.movie = data;
    });
  }
};
</script>

<template>
  <div>
    <h1>{{movie.title}}</h1>
    <div v-for="value, key in displayData" :key="key" v-if="value">{{key}}: {{value}}</div>
  </div>
</template>


<style lang="scss" scoped>
</style>
