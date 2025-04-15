const connection = require('../database/db.js')

function index(req, res) {
    res.json({ message: 'Lista dei film' })
}

function show(req, res) {
    const { id } = req.params
    res.json({ message: `Film con id: ${id}` })
}

module.exports = {
    index,
    show
}