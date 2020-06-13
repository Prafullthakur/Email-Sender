const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');

// Init app
const app = express();

// Templete engine
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs);

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/public', express.static(path.join(__dirname + 'public')));

app.get('/', (req, res) => {
    res.render('contact');
});

const Port = 8000;

app.listen(Port, () => {
    console.log(`Server started on Port: ${Port}`);
});