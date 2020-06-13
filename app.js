const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
require('dotenv').config();
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

app.post('/send', (req, res) => {
    const output = `
   <p>You have a contact request</p>
   <h3>Contact Details</h3>
   <ul>
        <li>Name: ${req.body.name}</li>
        <li>Company: ${req.body.company}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
       
    </ul>
    <h3>Message</h3>
    <p>Message: ${req.body.message}</p>
   `;

    // Step1
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'process.env.EMAIL',
            pass: 'process.env.PASS'
        }
    })

    // Step2
    let mailOption = {
        from: 'parfullchauhan49@gmail.com',
        to: 'princevatsal@gmail.com',
        subject: 'Testing with node',
        text: 'It works',
        html: output
    }

    // Step3
    transporter.sendMail(mailOption, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Email Sent...');
        }
    });
});



const Port = 3000;

app.listen(Port, () => {
    console.log(`Server started on Port: ${Port}`);
});