/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// const showcase = require('./newShowcase');
const app = express();

const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// To support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// To parse cookies from the HTTP Request
app.use(cookieParser());

app.engine('hbs', exphbs({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

// app.use(express.static(path.resolve(__dirname, '../dist')));
// app.use('/', showcase);

app.listen(port, (err) => {
  if (err) {
    console.log('Error Starting server');
  } else {
    console.log('Server Running on Port: ', port);
  }
});


