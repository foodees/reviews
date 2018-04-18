//CONTROLLA

const model = require('../model');

module.exports = {
  reviews: {
    getByDateDesc: (req, res) => {
      var params = req.query;
      console.log('inside controller get: ', params);
      model.reviews.getByDateDesc(params.id, parseInt(params.page))
        .then((data) => {
          console.log('CONTROLLER GET REVIEWS SUCCESS: ', data);
          res.send(data);
        })
          .catch((err) => {
            console.log('CONTROLLER GET REVIEWS ERR: ', err);
            res.send(err);
          });
    },
    getByDateAsc: (req, res) => {
      var params = req.query;
      console.log('inside controller get: ', params);
      model.reviews.getByDateAsc(params.id, parseInt(params.page))
        .then((data) => {
          console.log('CONTROLLER GET REVIEWS SUCCESS: ', data);
          res.send(data);
        })
          .catch((err) => {
            console.log('CONTROLLER GET REVIEWS ERR: ', err);
            res.send(err);
          });
    },
    getByRatingDesc: (req, res) => {
      var params = req.query;
      console.log('inside controller get: ', params);
      model.reviews.getByRatingDesc(params.id, parseInt(params.page))
        .then((data) => {
          console.log('CONTROLLER GET REVIEWS SUCCESS: ', data);
          res.send(data);
        })
          .catch((err) => {
            console.log('CONTROLLER GET REVIEWS ERR: ', err);
            res.send(err);
          });
    },
    getByRatingAsc: (req, res) => {
      var params = req.query;
      console.log('inside controller get: ', params);
      model.reviews.getByRatingAsc(params.id, parseInt(params.page))
        .then((data) => {
          console.log('CONTROLLER GET REVIEWS SUCCESS: ', data);
          res.send(data);
        })
          .catch((err) => {
            console.log('CONTROLLER GET REVIEWS ERR: ', err);
            res.send(err);
          });
    },
    getCount: (req, res) => {
      var params = req.query;
      console.log('inside controller get: ', params);
      model.reviews.getCount(params.id)
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
    get: (req, res) => {
      var params = req.query;
      console.log('inside controller get: ', params);
      model.search.get(params.id, params.term)
        .then((data) => {
          console.log('CONTROLLER GET REVIEWS SUCCESS: ', data);
          res.send(data);
        })
          .catch((err) => {
            console.log('CONTROLLER GET REVIEWS ERR: ', err);
            res.send(err);
          });
    }
  }
};
