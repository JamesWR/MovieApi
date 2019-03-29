
<script>
import axios from "axios";
import Vue from "vue";
export default {
  props: {
    id: String
  },
  components: {},
  data() {
    return {
      movie: {}
    };
  },
  computed: {},
  methods: {},
  mounted() {
    axios.get(`/api/movie/${this.id}`).then(({ data }) => {
      debugger;
      this.movie = data;
    });
  }
};
</script>

<template lang="jade">
  <div>
    hello
    <div v-for="value, key in movie" v-if="value">
      {{key}}: {{value}}
    </div>
  </div>
</template>


<style lang="stylus" scoped>
</style>