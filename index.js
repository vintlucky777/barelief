import 'babel-polyfill';

import express from 'express';
import cool from 'cool-ascii-faces';

const app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/cool', (req, res) => {
  res.send(`${cool()} Hey man...`);
});

app.get('/404', (req, res) => {
  res.status(404).send();
});

app.get('/403', (req, res) => {
  res.status(403).send({api: 'unauthorized'});
});

app.all('/secret', (req, res, next) => {
  res.send('Accessing the secret section ...');
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

app.all('/*', (req, res, next) => {
  res.send('going deeper...');
});

app.listen(app.get('port'), () => {
  console.log(`Example app listening on port ${app.get('port')}!`);
});
