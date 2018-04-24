
const request = require('supertest');
const server = require('../server/app.js');

// dummy data for /reviews/desc
jest.mock('reviewData');
jest.mock('userData');
let reviewData = require('reviewData');
let userData = require('userData');

//dummy data for /reviews/asc
jest.mock('reviewAscData');
jest.mock('userAscData');
let reviewAscData = require('reviewAscData');
let userAscData = require('userAscData');

//dummy data for /reviews/ratingdesc
jest.mock('reviewRatingData');
jest.mock('userRatingData');
let reviewRatingData = require('reviewRatingData');
let userRatingData = require('userRatingData');

//dummy data for /reviews/asc
jest.mock('reviewRatingAscData');
jest.mock('userRatingAscData');
let reviewRatingAscData = require('reviewRatingAscData');
let userRatingAscData = require('userRatingAscData');

// dummy data for /reviews/desc
jest.mock('reviewSearchData');
jest.mock('userSearchData');
let reviewSearchData = require('reviewSearchData');
let userSearchData = require('userSearchData');

// dummy data for /reviews/asc
jest.mock('reviewSearchData');
jest.mock('userSearchData');
let reviewSearchAscData = require('reviewSearchAscData');
let userSearchAscData = require('userSearchAscData');

//dummy data for /reviews/search/ratingdesc
jest.mock('reviewRatingSearchData');
jest.mock('userRatingSearchData');
let reviewRatingSearchData = require('reviewRatingSearchData');
let userRatingSearchData = require('userRatingSearchData');


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


    test('/reviews/ratingasc should return response with correct reviews, 10 at a time', (done) => {
      request(server.app).get('/biz/--9e1ONYQuAa-CB_Rrw7Tw/reviews/ratingasc/?id=--9e1ONYQuAa-CB_Rrw7Tw&page=1').then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.reviews.length).toBe(10);
        expect(response.body.users.length).toBe(10);
        expect(JSON.stringify(response.body.reviews)).toBe(JSON.stringify(reviewRatingAscData.pageOne));
        expect(JSON.stringify(response.body.users)).toBe(JSON.stringify(userRatingAscData.pageOne));
        done();
      });

      request(server.app).get('/biz/--9e1ONYQuAa-CB_Rrw7Tw/reviews/ratingasc/?id=--9e1ONYQuAa-CB_Rrw7Tw&page=10').then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.reviews.length).toBe(10);
        expect(response.body.users.length).toBe(10);
        expect(JSON.stringify(response.body.reviews)).toBe(JSON.stringify(reviewRatingAscData.pageTen));
        expect(JSON.stringify(response.body.users)).toBe(JSON.stringify(userRatingAscData.pageTen));
        done();
      });
    });


    test('/reviews/desc should return response with correct reviews, 10 at a time', (done) => {
      request(server.app).get('/biz/--9e1ONYQuAa-CB_Rrw7Tw/reviews/search/desc/?id=--9e1ONYQuAa-CB_Rrw7Tw&page=1&term=steak').then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.reviews.length).toBe(10);
        expect(response.body.users.length).toBe(10);
        expect(JSON.stringify(response.body.reviews)).toBe(JSON.stringify(reviewSearchData.pageOne));
        expect(JSON.stringify(response.body.users)).toBe(JSON.stringify(userSearchData.pageOne));
        done();
      });

      request(server.app).get('/biz/--9e1ONYQuAa-CB_Rrw7Tw/reviews/search/desc/?id=--9e1ONYQuAa-CB_Rrw7Tw&page=10&term=steak').then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.reviews.length).toBe(1);
        expect(response.body.users.length).toBe(1);
        expect(JSON.stringify(response.body.reviews)).toBe(JSON.stringify(reviewSearchData.pageTen));
        expect(JSON.stringify(response.body.users)).toBe(JSON.stringify(userSearchData.pageTen));
        done();
      });
    });

    test('/reviews/search/asc should return response with correct reviews, 10 at a time', (done) => {
      request(server.app).get('/biz/--9e1ONYQuAa-CB_Rrw7Tw/reviews/search/asc/?id=--9e1ONYQuAa-CB_Rrw7Tw&page=1&term=steak').then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.reviews.length).toBe(10);
        expect(response.body.users.length).toBe(10);
        expect(JSON.stringify(response.body.reviews)).toBe(JSON.stringify(reviewSearchAscData.pageOne));
        expect(JSON.stringify(response.body.users)).toBe(JSON.stringify(userSearchAscData.pageOne));
        done();
      });

      request(server.app).get('/biz/--9e1ONYQuAa-CB_Rrw7Tw/reviews/search/asc/?id=--9e1ONYQuAa-CB_Rrw7Tw&page=10&term=steak').then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.reviews.length).toBe(1);
        expect(response.body.users.length).toBe(1);
        expect(JSON.stringify(response.body.reviews)).toBe(JSON.stringify(reviewSearchAscData.pageTen));
        expect(JSON.stringify(response.body.users)).toBe(JSON.stringify(userSearchAscData.pageTen));
        done();
      });
    });


    test('/reviews/search/ratingdesc should return response with correct reviews, 10 at a time', (done) => {
      request(server.app).get('/biz/--9e1ONYQuAa-CB_Rrw7Tw/reviews/search/ratingdesc/?id=--9e1ONYQuAa-CB_Rrw7Tw&page=1&term=steak').then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.reviews.length).toBe(10);
        expect(response.body.users.length).toBe(10);
        expect(JSON.stringify(response.body.reviews)).toBe(JSON.stringify(reviewRatingSearchData.pageOne));
        expect(JSON.stringify(response.body.users)).toBe(JSON.stringify(userRatingSearchData.pageOne));
        done();
      });

      request(server.app).get('/biz/--9e1ONYQuAa-CB_Rrw7Tw/reviews/search/ratingdesc/?id=--9e1ONYQuAa-CB_Rrw7Tw&page=10&term=steak').then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.reviews.length).toBe(1);
        expect(response.body.users.length).toBe(1);
        expect(JSON.stringify(response.body.reviews)).toBe(JSON.stringify(reviewRatingSearchData.pageTen));
        expect(JSON.stringify(response.body.users)).toBe(JSON.stringify(userRatingSearchData.pageTen));
        done();
      });
    });

    // test('/reviews/ratingasc should return response with correct reviews, 10 at a time', (done) => {
    //   request(server.app).get('/biz/--9e1ONYQuAa-CB_Rrw7Tw/reviews/ratingasc/?id=--9e1ONYQuAa-CB_Rrw7Tw&page=1').then(response => {
    //     expect(response.statusCode).toBe(200);
    //     expect(response.body.reviews.length).toBe(10);
    //     expect(response.body.users.length).toBe(10);
    //     expect(JSON.stringify(response.body.reviews)).toBe(JSON.stringify(reviewRatingAscData.pageOne));
    //     expect(JSON.stringify(response.body.users)).toBe(JSON.stringify(userRatingAscData.pageOne));
    //     done();
    //   });
    //
    //   request(server.app).get('/biz/--9e1ONYQuAa-CB_Rrw7Tw/reviews/ratingasc/?id=--9e1ONYQuAa-CB_Rrw7Tw&page=10').then(response => {
    //     expect(response.statusCode).toBe(200);
    //     expect(response.body.reviews.length).toBe(10);
    //     expect(response.body.users.length).toBe(10);
    //     expect(JSON.stringify(response.body.reviews)).toBe(JSON.stringify(reviewRatingAscData.pageTen));
    //     expect(JSON.stringify(response.body.users)).toBe(JSON.stringify(userRatingAscData.pageTen));
    //     done();
    //   });
    // });

    test('/reviews/getCount should return response the number of reviews for a restaurant', (done) => {
      request(server.app).get('/biz/--9e1ONYQuAa-CB_Rrw7Tw/reviews/count/?id=--9e1ONYQuAa-CB_Rrw7Tw').then(response => {
        expect(response.statusCode).toBe(200);
        expect(JSON.stringify(response.body)).toBe('[{"count":"141"}]');
        done();
      });
    });
});
