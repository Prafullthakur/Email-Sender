const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');

// Init app
const app = express();

// Templete engine
app.engine('handlebars', exphbs({
    extname: '.handlebars',
    defaultLayout: null
}));
app.set('view engine', 'handlebars');

app.use('/public', express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('contact');
});

const Port = 3000;

app.listen(Port, () => {
    console.log(`Server started on Port: ${Port}`);
});