// Default Imports

const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyparser = require('body-parser');

// Imports

const samplerouter = require('./src/routes/sampleroute');
const app = express();

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log('Database Connetion Established')
);

// Listening to the Messeages

app.use(express.json());
app.use(bodyparser.json());

app.use('/', samplerouter);
app.listen('port', process.env.PORT || 8800);
module.exports = app;
