import express from 'express';
import mongoose from 'mongoose';

import { MONGODB_URI } from './utils/secret.js';
import logger from './utils/logger.js';

import testRouter from './routes/test_router.js';

const mongoUrl = MONGODB_URI; // we are sure that the uri is not none, cuz its checked in secret.ts, so using non-null assertion operator is fine here.

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {})
  .catch((err) => {
    logger.debug(`Mongo connection error: ${err}`);
  });

const app = express();

// configuration
app.set('port', process.env.PORT || 3000);

// middleware
app.use(express.json());

// add routers
app.use('/test', testRouter);

export default app;
