const { HttpStatusCode } = require('./src/libs/constants');

const errorHandler = require('./src/middlewares/errorHandler');
const pageNotFoundHandler = require('./src/middlewares/pageNotFoundHandler');


module.exports = {
  libs: {
    constants: {
      HttpStatusCode
    }
  },
  middlewares: {
    errorHandler,
    pageNotFoundHandler
  }
}
