'use strict'

function loggerMessage(request, response, next) {
  if (!request.query.name) {
    next('Please type a name')
  } else {
    request.query.name = request.query.name;
    next();
  }
}

module.exports = loggerMessage;