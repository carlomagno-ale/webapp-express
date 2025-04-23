const router = require('express').Router();
const MoviesController = require('../controllers/MoviesController.js')
const ReviewController = require('../controllers/ReviewController.js')

//route per lista di film
router.get('/', MoviesController.index)

//route per singolo film
router.get('/:id', MoviesController.show)

//route per recensione
//router.post('/:id/review', MoviesController.storeReview)
router.post('/:id/review', ReviewController.storeReview)

module.exports = router;