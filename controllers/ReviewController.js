const connection = require('../database/db.js')

// store a movie review
function storeReview(req, res) {

    const id = Number(req.params.id)

    const { name, vote, text } = req.body

    const insertSql = 'INSERT INTO reviews (movie_id, name, vote, text) VALUES (?, ?, ?, ?)'
    const values = [id, name, vote, text]

    connection.query(insertSql, values, (err, results) => {
        if (err) return res.status(500).json({ error: err.message })
        console.log(results)
        res.status(201).json({ message: 'Recensione aggiunta', reviewId: results.insertId })
    })

}

module.exports = {
    storeReview,
}