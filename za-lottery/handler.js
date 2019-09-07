'use strict';

const request = require('../lib/request/ithuba');

module.exports.list = async (event, context) => {
  const results = await request.allResults('LOTTO');

  console.log(results);
};

module.exports.get = async (event, context) => {
  const draw = context.draw;
  const result = await request.singleResult(context.draw, 'LOTTO');

  console.log(result);
};
