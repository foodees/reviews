//MODELO

var db = require('../../database');

module.exports = {
  reviews: {
    get: () => {
      // select all reviews with pagination. ORDER BY, OFFSET, FETCH NEXT
      // can't use  knex. have to use native queries yadadada
      return new Promise((resolve, reject) => {

      });
    },
    post: (review) => {
      return new Promise((resolve, reject) => {

      });
    },
    patch: (compliment) => {
      return new Promise((resolve, reject) => {

      });
    }
  },
  search: {
    // how do i do this
    get: (searchTerm) => {
      return new Promise((resolve, reject) => {

      });
    }
  }
};
