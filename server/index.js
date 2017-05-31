import { hotels, hotelsSort, hotelsFilter } from './hotels';

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

    const filters = Object.keys(req.query).filter((key) => key.indexOf('sort') === -1);

    if (req.query && filters.length > 0) {
      hotelsCopy = hotelsFilter(hotelsCopy, filters.reduce((obj, f) => {
        obj[f] = req.query[f];
        return obj;
      }, {}));
    }

    res.send(hotelsCopy);
})

app.listen(9000, () => {
    console.log('Server started');
});
