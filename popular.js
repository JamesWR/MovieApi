import config from './config'
import axios from 'axios'

export default {
    async get() {
        console.log('hi')
        return axios.get(
            config.apiBase + 'movie/popular',
            {
                params: { api_key: config.apiKey }
            }
        )
    }
}