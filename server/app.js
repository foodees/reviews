//SERVER APP.JS

var express = require('express');
var db = require('./db');
var cors = require('cors');

var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

app.set('port', 3004);

app.use(morgan('dev'));
app.use(parser.json());

app.use(cors());

app.use('/biz/:business_id/reviews', router);

app.use(express.static(__dirname + '/../client'));

if (!module.parent) {
  app.listen(app.get('port'));
  console.log('Listening on', app.get('port'));
}
