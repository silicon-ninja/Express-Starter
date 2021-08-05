const express = require('express');
const mongoose = require('mongoose');
const MONGODB_URI = require('./utils/secrets');
const logger = require('./utils/logger');

const testRouter = require('./routes/test_router');

var mongoUrl = MONGODB_URI;

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info('Connected to the Datab');
  })
  .catch((err) => {
    logger.debug(`Mongo Connection Error: ${err}`);
  });

const app = express();

// configuration
app.set('port', process.env.PORT || 3000);

// middleware
app.use(express.json());

// add routers
app.use('/test', testRouter);

module.exports = app;
