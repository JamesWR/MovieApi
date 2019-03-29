
import Vue from 'vue';
import App from './app.vue';
import router from './router'
console.log(App)
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});

