const errorHandler = require('errorhandler');
const app = require('./app');
const logger = require('./utils/logger');

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
