import errorHandler from 'errorhandler';
import app from './app.js';

import logger from './utils/logger.js';

if (process.env.NODE_ENV !== 'production') {
  // provides full stack trace
  app.use(errorHandler());
}

app.listen(app.get('port'), () => {
  logger.info(
    `App is running at http://localhost:${app.get('port')} in ${app.get(
      'env'
    )} mode.`
  );
});
