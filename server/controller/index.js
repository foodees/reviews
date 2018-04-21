//CONTROLLA

const model = require('../model');

module.exports = {
  reviews: {
    get: (req, res) => {
      var params = req.query;
      console.log('inside controller get: ', params);
      model.reviews.get(params.id, parseInt(params.page))
        .then((data) => {
          console.log('CONTROLLER GET REVIEWS SUCCESS: ', data);
          res.send(data);
        })
          .catch((err) => {
            console.log('CONTROLLER GET REVIEWS ERR: ', err);
            res.send(err);
          });
    },
    post: (req, res) => {},
    patch: (req, res) => {}
  },
  search: {
    get: (req, res) => {}
  }
};
