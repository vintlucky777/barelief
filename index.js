import express from 'express';
const app = express();

app.get('/', function (req, res) {
  res.status(200).send('Hello World!');
});

app.get('/404', function (req, res) {
  res.status(404);
});

app.get('/403', function (req, res) {
  res.status(404).send({api: 'unauthorized'});
});

app.all('/secret', function (req, res, next) {
  res.send('Accessing the secret section ...');
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
