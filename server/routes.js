var controller = require('./controller');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/desc', controller.reviews.getByDateDesc);

router.get('/asc', controller.reviews.getByDateAsc);

router.get('/ratingdesc', controller.reviews.getByRatingDesc);

router.get('/ratingasc', controller.reviews.getByRatingAsc);

router.get('/count', controller.reviews.getCount);

router.post('/', controller.reviews.post);

router.patch('/compliment', controller.reviews.patch);

router.get('/search', controller.search.get);



module.exports = router;
