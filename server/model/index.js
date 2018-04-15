//MODELO

const db = require('../../database/index.js');

module.exports = {
  reviews: {
    get: (id, page) => {
      // select all reviews with pagination. ORDER BY, OFFSET, FETCH NEXT
      // can't use  knex. have to use native queries yadadada
      console.log('inside model get. id: ', id, '. page: ', page);
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT * FROM foodee_reviews WHERE business_id = '${id}' ORDER BY date DESC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY`;

        db.query(queryStr, (err, data) => {
          if (err) {
            console.log('GET REVIEW DB QUERY ERROR: ', err);
            reject(err);
          } else {
            console.log('GET REVIEW DB QUERY SUCCESS');
            resolve(data);
          }
        });
      });
    },
    post: (review) => {
      return new Promise((resolve, reject) => {
        var queryStr = '';
      });
    },
    patch: (compliment) => {
      return new Promise((resolve, reject) => {
        var queryStr = '';
      });
    }
  },
  search: {
    // how do i do this
    get: (searchTerm) => {
      return new Promise((resolve, reject) => {
        var queryStr = '';
      });
    }
  }
};
