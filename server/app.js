//SERVER APP.JS

var express = require('express');
// var db = require('./db');
var cors = require('cors');

var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();


app.set('port', 3004);

app.use(cors());
app.use(morgan('dev'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());


app.use('/biz/:business_id/reviews', router);





//TODO UNCOMMENT THIS AFTER CLIENT IMPLEMENTATION
//app.use(express.static(__dirname + '/../client'));

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}

module.exports.app = app;
