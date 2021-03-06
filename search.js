import config from './config'
import axios from 'axios'

export default {
    async get(req) {
        return axios.get(
            config.apiBase + 'search/movie',
            {
                params: { api_key: config.apiKey, ...req.query }
            }
        )
    }
}