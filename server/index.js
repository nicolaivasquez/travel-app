import { hotels } from './hotels';

const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/hotels', (req, res) => {
    res.send(hotels);
})

app.listen(9000, () => {
    console.log('Server started');
});
