const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');

// Init app
const app = express();

// Templete engine
app.engine('handlebars', exphbs);
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);

app.use(express.static(__dirname + 'public'));

app.get('/', (req, res) => {
    res.send('hello');
});

const Port = 8000;

app.listen(Port, () => {
    console.log(`Server started on Port: ${Port}`);
});