'use strict'


// This file is for the unit test

const loggerMessage = require('./logger');

describe('This is a placeholder description for the test', () => {

  test('This is also where the test instructions should go, in case of an error', () => {

    const request = {};
    const response = {};
    
    const next = function () {}

    loggerMessage(request, response, next);

  });
});

