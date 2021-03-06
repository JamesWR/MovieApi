import express from 'express'
import path from 'path'
import popular from './popular'
import search from './search'
import movie from './movie'
const port = 3000

const app = express()
app.get('/api/popular', async (req, res, next) => {
    try {
        const result = await popular.get(req, res)
        res.json(result.data)
    } catch (e) {
        next(e)
    }
})
app.get('/api/search', async (req, res, next) => {
    try {
        const result = await search.get(req, res)
        res.json(result.data)
    } catch (e) {
        next(e)
    }
})
app.get('/api/movie/:movieId', async (req, res, next) => {
    try {
        const result = await movie.get(req, res)
        res.json(result.data)
    } catch (e) {
        next(e)
    }
})
app.use('/', express.static(path.join(__dirname, '/client/dist')))
app.get(
    '/*',
    (req, res) => {
        return res.sendFile(path.join(__dirname + '/client/dist/index.html'))
    }
)


var server = app.listen(
    port,
    () => console.log(`Example app listening on port ${port}!`)
)

module.exports = server