'use strict';

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _coolAsciiFaces = require('cool-ascii-faces');

var _coolAsciiFaces2 = _interopRequireDefault(_coolAsciiFaces);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set('port', process.env.PORT || 5000);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/cool', function (req, res) {
  res.send((0, _coolAsciiFaces2.default)() + ' Hey man...');
});

app.get('/404', function (req, res) {
  res.status(404).send();
});

app.get('/403', function (req, res) {
  res.status(403).send({ api: 'unauthorized' });
});

app.all('/secret', function (req, res, next) {
  res.send('Accessing the secret section ...');
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

app.all('/*', function (req, res, next) {
  res.send('going deeper...');
});

app.listen(app.get('port'), function () {
  console.log('Example app listening on port ' + app.get('port') + '!');
});

