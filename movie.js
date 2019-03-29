import config from './config'
import axios from 'axios'

export default {
    async get(req) {
        return axios.get(
            config.apiBase + `movie/${req.params.movieId}`,
            {
                params: { api_key: config.apiKey }
            }
        )
    }
}