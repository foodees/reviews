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

        db.query(queryStr, (err, reviewData) => {
          if (err) {
            console.log('GET REVIEW DB QUERY ERROR: ', err);
            reject(err);
          } else {
            //console.log('GET REVIEW DB QUERY SUCCESS: ', reviewData);
            var queryStr2 = `SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '${id}' ORDER BY date DESC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY)`;
            //console.log('queryStr2: ', queryStr2);

            //SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '--9e1ONYQuAa-CB_Rrw7Tw' ORDER BY date DESC OFFSET 0 ROWS FETCH NEXT 10 ROWS ONLY);
            db.query(queryStr2, (err, userData) => {
              if (err) {
                console.log('GET USER DB QUERY ERROR: ', err);
                reject(err);
              } else {
                //console.log('GET USER DB QUERY SUCCESS: ', userData);

                var resObj = {
                  reviews: reviewData.rows,
                  users: userData.rows
                };
                resolve(resObj);
              }
            });

            // resolve(reviewData);
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
