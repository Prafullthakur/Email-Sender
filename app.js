const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const esphbs = require('express-handlebars');

const app = express();

app.get('/', (req, res) => {
    res.send('hello');
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server started on Port: ${port}`);
});