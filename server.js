const express = require('express');
const cors = require('cors');
const app = express();
//connessione con il database
const connection = require('./database/db.js')

const PORT = process.env.PORT || 3000;

/////Middleware/////

//middleware per cors
app.use(cors(
    {
        origin: process.env.FRONT_URL || 'http://localhost:5173',
    }
));

//body parser middleware traduce i dati che arrivano dal client
app.use(express.json());

// static assets middleware permette al server Express di accedere e distribuire i file ai client 
app.use(express.static('images'));

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

//middleware per errori
const serverError = require("./middlewares/serverError");
const notFound = require("./middlewares/404_notFound");

//Routes
app.get('/', (req, res) => {
    res.send('Server Movies Online')
})

//route per lista di film
app.get('/api/v1/movies', (req, res) => {
    res.json({ message: 'Lista dei film' })
})

//route per singolo film
app.get('/api/v1/movies/:id', (req, res) => {
    const { id } = req.params
    res.json({ message: `Film con id: ${id}` })
})

app.use(serverError)
app.use(notFound)

