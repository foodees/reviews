var controller = require('./controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/', controller.reviews.get);

router.post('/', controller.reviews.post);

router.patch('/', controller.reviews.patch);

router.post('/compliment', controller.search.get);



module.exports = router;
