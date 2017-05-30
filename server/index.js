import { hotels } from './hotels';

const express = require('express');
const app = express();

app.get('/hotels', (req, res) => {
    res.send(hotels);
})

app.listen(3000, () => {
    console.log('Server started');
});