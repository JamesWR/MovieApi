import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from './components/home.vue'
import MoviePage from './components/moviePage.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/', name: "home", component: Home
        },
        {
            path: '/movie/:id', name: "movie",
            props: ({ params }) => {
                return params
            },
            component: MoviePage
        }
    ]
})