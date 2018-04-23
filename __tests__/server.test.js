// const axios = require('axios');
const request = require('supertest');
const server = require('../server/app.js');

// dummy data for /reviews/desc
let reviewData = require('../dummyData/reviewData.js');
let userData = require('../dummyData/userData.js');

//dummy data for /reviews/asc
let reviewAscData = require('../dummyData/reviewAscData.js');
let userAscData = require('../dummyData/userAscData.js');

//dummy data for /reviews/ratingdesc
let reviewRatingData = require('../dummyData/reviewRatingData.js');
let userRatingData = require('../dummyData/userRatingData.js');

//dummy data for /reviews/asc

describe('Test the all endpoints for correct responses with supertest', () => {
    test('/reviews/restaurant should return response with correct restaurant name', (done) => {
      request(server.app).get('/biz/--9e1ONYQuAa-CB_Rrw7Tw/reviews/restaurant/?id=--9e1ONYQuAa-CB_Rrw7Tw').then(response => {
        expect(response.statusCode).toBe(200);
        expect(JSON.stringify(response.body)).toBe('[{"business_name":"Delmonico Steakhouse"}]');
        done();
      });
    });


    test('/reviews/desc should return response with correct reviews, 10 at a time', (done) => {
      request(server.app).get('/biz/--9e1ONYQuAa-CB_Rrw7Tw/reviews/desc/?id=--9e1ONYQuAa-CB_Rrw7Tw&page=1').then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.reviews.length).toBe(10);
        expect(response.body.users.length).toBe(10);
        expect(JSON.stringify(response.body.reviews)).toBe(JSON.stringify(reviewData.pageOne));
        expect(JSON.stringify(response.body.users)).toBe(JSON.stringify(userData.pageOne));
        done();
      });

      request(server.app).get('/biz/--9e1ONYQuAa-CB_Rrw7Tw/reviews/desc/?id=--9e1ONYQuAa-CB_Rrw7Tw&page=10').then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.reviews.length).toBe(10);
        expect(response.body.users.length).toBe(10);
        expect(JSON.stringify(response.body.reviews)).toBe(JSON.stringify(reviewData.pageTen));
        expect(JSON.stringify(response.body.users)).toBe(JSON.stringify(userData.pageTen));
        done();
      });
    });


    test('/reviews/asc should return response with correct reviews, 10 at a time', (done) => {
      request(server.app).get('/biz/--9e1ONYQuAa-CB_Rrw7Tw/reviews/asc/?id=--9e1ONYQuAa-CB_Rrw7Tw&page=1').then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.reviews.length).toBe(10);
        expect(response.body.users.length).toBe(10);
        expect(JSON.stringify(response.body.reviews)).toBe(JSON.stringify(reviewAscData.pageOne));
        expect(JSON.stringify(response.body.users)).toBe(JSON.stringify(userAscData.pageOne));
        done();
      });

      request(server.app).get('/biz/--9e1ONYQuAa-CB_Rrw7Tw/reviews/asc/?id=--9e1ONYQuAa-CB_Rrw7Tw&page=10').then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.reviews.length).toBe(10);
        expect(response.body.users.length).toBe(10);
        expect(JSON.stringify(response.body.reviews)).toBe(JSON.stringify(reviewAscData.pageTen));
        expect(JSON.stringify(response.body.users)).toBe(JSON.stringify(userAscData.pageTen));
        done();
      });
    });


    test('/reviews/ratingdesc should return response with correct reviews, 10 at a time', (done) => {
      request(server.app).get('/biz/--9e1ONYQuAa-CB_Rrw7Tw/reviews/ratingdesc/?id=--9e1ONYQuAa-CB_Rrw7Tw&page=1').then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.reviews.length).toBe(10);
        expect(response.body.users.length).toBe(10);
        expect(JSON.stringify(response.body.reviews)).toBe(JSON.stringify(reviewRatingData.pageOne));
        expect(JSON.stringify(response.body.users)).toBe(JSON.stringify(userRatingData.pageOne));
        done();
      });

      request(server.app).get('/biz/--9e1ONYQuAa-CB_Rrw7Tw/reviews/ratingdesc/?id=--9e1ONYQuAa-CB_Rrw7Tw&page=10').then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.reviews.length).toBe(10);
        expect(response.body.users.length).toBe(10);
        expect(JSON.stringify(response.body.reviews)).toBe(JSON.stringify(reviewRatingData.pageTen));
        expect(JSON.stringify(response.body.users)).toBe(JSON.stringify(userRatingData.pageTen));
        done();
      });
    });

    // test('/reviews/ratingasc should return response with correct reviews, 10 at a time', (done) => {
    //   // request(server.app).get('/biz/--9e1ONYQuAa-CB_Rrw7Tw/reviews/ratingdesc/?id=--9e1ONYQuAa-CB_Rrw7Tw&page=1').then(response => {
    //   //   expect(response.statusCode).toBe(200);
    //   //   expect(response.body.reviews.length).toBe(10);
    //   //   expect(JSON.stringify(response.body.reviews)).toBe(JSON.stringify(reviewDataPage10));
    //   //   expect(JSON.stringify(response.body.users)).toBe(JSON.stringify(userDataPage10));
    //   //   done();
    //   // });
    // });
});
