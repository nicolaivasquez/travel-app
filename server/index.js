import { hotels, hotelsSort } from './hotels';

const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/hotels', (req, res) => {
    let hotelsCopy = hotels.slice();

    if (req.query.sortValue && req.query.sortDirection) {
      hotelsCopy = hotelsSort(hotelsCopy, {
        value: req.query.sortValue,
        direction: req.query.sortDirection,
      });
    }
    res.send(hotelsCopy);
})

app.listen(9000, () => {
    console.log('Server started');
});
