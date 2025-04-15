const router = require('express').Router();
const MoviesController = require('../controllers/MoviesController.js')

//route per lista di film
router.get('/', MoviesController.index)

//route per singolo film
router.get('/:id', MoviesController.show)

module.exports = router;