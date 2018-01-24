const express = require('express');
const nedb = require('nedb');

const app = express();

const db = new nedb({
    filename: 'data'
});

db.loadDatabase();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('listening at port 3000');
});