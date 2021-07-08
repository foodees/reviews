//MODEL

const db = require('../../database/index.js');

module.exports = {
  restaurant: {
    get: (id) => {
      console.log('inside model get. id: ', id);
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT business_name FROM foodee_restaurant_names WHERE business_id = '${id}'`;

        db.query(queryStr, (err, name) => {
          if (err) {
            console.log('GET RESTAURANT NAME DB QUERY ERROR: ', err);
            reject(err);
          } else {
            console.log('GET RESTAURANT NAME SUCCESS');
            resolve(name.rows);
          }
        });
      });
    }
  },
  reviews: {
    getByDateDesc: (id, page) => {

      console.log('inside model get. id: ', id, '. page: ', page);
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT * FROM foodee_reviews WHERE business_id = '${id}' ORDER BY date DESC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY`;

        db.query(queryStr, (err, reviewData) => {
          if (err) {
            console.log('GET REVIEW DB QUERY ERROR: ', err);
            reject(err);
          } else {

            var queryStr2 = `SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '${id}' ORDER BY date DESC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY)`;

            db.query(queryStr2, (err, userData) => {
              if (err) {
                console.log('GET USER DB QUERY ERROR: ', err);
                reject(err);
              } else {
                var resObj = {
                  reviews: reviewData.rows,
                  users: userData.rows
                };
                resolve(resObj);
              }
            });
          }
        });
      });
    },
    getByDateAsc: (id, page) => {

      console.log('inside model get. id: ', id, '. page: ', page);
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT * FROM foodee_reviews WHERE business_id = '${id}' ORDER BY date ASC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY`;

        db.query(queryStr, (err, reviewData) => {
          if (err) {
            console.log('GET REVIEW DB QUERY ERROR: ', err);
            reject(err);
          } else {

            var queryStr2 = `SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '${id}' ORDER BY date ASC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY)`;

            db.query(queryStr2, (err, userData) => {
              if (err) {
                console.log('GET USER DB QUERY ERROR: ', err);
                reject(err);
              } else {
                var resObj = {
                  reviews: reviewData.rows,
                  users: userData.rows
                };
                resolve(resObj);
              }
            });
          }
        });
      });
    },
    getByRatingDesc: (id, page) => {

      console.log('inside model get. id: ', id, '. page: ', page);
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT * FROM foodee_reviews WHERE business_id = '${id}' ORDER BY stars DESC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY`;

        db.query(queryStr, (err, reviewData) => {
          if (err) {
            console.log('GET REVIEW DB QUERY ERROR: ', err);
            reject(err);
          } else {

            var queryStr2 = `SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '${id}' ORDER BY stars DESC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY)`;

            db.query(queryStr2, (err, userData) => {
              if (err) {
                console.log('GET USER DB QUERY ERROR: ', err);
                reject(err);
              } else {
                var resObj = {
                  reviews: reviewData.rows,
                  users: userData.rows
                };
                resolve(resObj);
              }
            });
          }
        });
      });
    },
    getByRatingAsc: (id, page) => {

      console.log('inside model get. id: ', id, '. page: ', page);
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT * FROM foodee_reviews WHERE business_id = '${id}' ORDER BY stars ASC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY`;

        db.query(queryStr, (err, reviewData) => {
          if (err) {
            console.log('GET REVIEW DB QUERY ERROR: ', err);
            reject(err);
          } else {

            var queryStr2 = `SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '${id}' ORDER BY stars ASC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY)`;

            db.query(queryStr2, (err, userData) => {
              if (err) {
                console.log('GET USER DB QUERY ERROR: ', err);
                reject(err);
              } else {
                var resObj = {
                  reviews: reviewData.rows,
                  users: userData.rows
                };
                resolve(resObj);
              }
            });
          }
        });
      });
    },
    getCount: (id) => {

      console.log('inside model get. id: ', id);
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT count(*) FROM foodee_reviews WHERE business_id = '${id}'`;

        db.query(queryStr, (err, data) => {
          if (err) {
            console.log('GET REVIEW COUNT DB QUERY ERROR: ', err);
            reject(err);
          } else {
            console.log('GET REVIEW COUNT SUCCESS');
            resolve(data.rows);
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
    getByDateDesc: (id, page, searchTerm) => {
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT * FROM foodee_reviews WHERE business_id = '${id}' AND text LIKE '%${searchTerm}%' ORDER BY date DESC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY`;

        db.query(queryStr, (err, reviewData) => {
          if (err) {
            console.log('GET SEARCH DB QUERY ERROR: ', err);
            reject(err);
          } else {
            var queryStr2 = `SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '${id}' AND text LIKE '%${searchTerm}%' ORDER BY date DESC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY)`;

            db.query(queryStr2, (err, userData) => {
              if (err) {
                console.log('GET USER DB QUERY ERROR: ', err);
                reject(err);
              } else {
                var resObj = {
                  reviews: reviewData.rows,
                  users: userData.rows
                };
                resolve(resObj);
              }
            });
          }
        });
      });
    },
    getByDateAsc:(id, page, searchTerm) => {
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT * FROM foodee_reviews WHERE business_id = '${id}' AND text LIKE '%${searchTerm}%' ORDER BY date ASC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY`;

        db.query(queryStr, (err, reviewData) => {
          if (err) {
            console.log('GET SEARCH DB QUERY ERROR: ', err);
            reject(err);
          } else {
            var queryStr2 = `SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '${id}' AND text LIKE '%${searchTerm}%' ORDER BY date ASC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY)`;

            db.query(queryStr2, (err, userData) => {
              if (err) {
                console.log('GET USER DB QUERY ERROR: ', err);
                reject(err);
              } else {
                var resObj = {
                  reviews: reviewData.rows,
                  users: userData.rows
                };
                resolve(resObj);
              }
            });
          }
        });
      });
    },
    getByRatingDesc: (id, page, searchTerm) => {

      console.log('inside model get. id: ', id, '. page: ', page);
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT * FROM foodee_reviews WHERE business_id = '${id}' AND text LIKE '%${searchTerm}%' ORDER BY stars DESC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY`;

        db.query(queryStr, (err, reviewData) => {
          if (err) {
            console.log('GET REVIEW DB QUERY ERROR: ', err);
            reject(err);
          } else {

            var queryStr2 = `SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '${id}' AND text LIKE '%${searchTerm}%' ORDER BY stars DESC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY)`;

            db.query(queryStr2, (err, userData) => {
              if (err) {
                console.log('GET USER DB QUERY ERROR: ', err);
                reject(err);
              } else {
                var resObj = {
                  reviews: reviewData.rows,
                  users: userData.rows
                };
                resolve(resObj);
              }
            });
          }
        });
      });
    },
    getByRatingAsc: (id, page, searchTerm) => {

      console.log('inside model get. id: ', id, '. page: ', page);
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT * FROM foodee_reviews WHERE business_id = '${id}' AND text LIKE '%${searchTerm}%' ORDER BY stars ASC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY`;

        db.query(queryStr, (err, reviewData) => {
          if (err) {
            console.log('GET REVIEW DB QUERY ERROR: ', err);
            reject(err);
          } else {

            var queryStr2 = `SELECT * FROM foodee_users WHERE id IN (SELECT user_id FROM foodee_reviews WHERE business_id = '${id}' AND text LIKE '%${searchTerm}%' ORDER BY stars ASC OFFSET ${10 * (page - 1)} ROWS FETCH NEXT 10 ROWS ONLY)`;

            db.query(queryStr2, (err, userData) => {
              if (err) {
                console.log('GET USER DB QUERY ERROR: ', err);
                reject(err);
              } else {
                var resObj = {
                  reviews: reviewData.rows,
                  users: userData.rows
                };
                resolve(resObj);
              }
            });
          }
        });
      });
    },
    getCount: (id, searchTerm) => {

      console.log('inside model get. id: ', id);
      return new Promise((resolve, reject) => {
        var queryStr = `SELECT count(*) FROM foodee_reviews WHERE business_id = '${id}' AND text LIKE '%${searchTerm}%'`;

        db.query(queryStr, (err, data) => {
          if (err) {
            console.log('GET REVIEW COUNT DB QUERY ERROR: ', err);
            reject(err);
          } else {
            console.log('GET REVIEW COUNT SUCCESS');
            resolve(data.rows);
          }
        });
      });
    }
  }
};
