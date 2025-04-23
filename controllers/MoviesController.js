const connection = require('../database/db.js')

function index(req, res) {

    //sql query per recuperare la lista dei film
    const sql = 'SELECT * FROM movies'
    //esegui la query
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message })
        console.log(results);
        res.json(results)
    })

}

function show(req, res) {
    const id = Number(req.params.id)

    const sql = 'SELECT * FROM movies WHERE id = ?'
    const sqlReviews = 'SELECT * FROM reviews WHERE movie_id = ?'

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message })
        if (results.length === 0) return res.status(404).json({ error: 'Film non trovato' })
        const movie = results[0]

        connection.query(sqlReviews, [id], (err, reviews) => {
            if (err) return res.status(500).json({ error: err.message })
            movie.reviews = reviews
            res.json(movie)

        })

    })
}

module.exports = {
    index,
    show,
}