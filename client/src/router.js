import VueRouter from 'vue-router'
import Vue from 'vue'
import home from './components/home.vue'
import movie from './components/movie.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/', name: "home", component: home
        },
        {
            path: '/movie/:id', name: "movie",
            props: ({ params }) => {
                return params
            },
            component: movie
        }
    ]
})