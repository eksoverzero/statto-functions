'use strict';

const axios = require('axios');
const querystring = require('querystring');

const singleResult = async (draw, game) => {
  return axios({
    url: '/index.php',
    method: 'post',
    baseURL: 'https://www.nationallottery.co.za',
    params: {
      task: 'results.redirectPageURL',
      option: 'com_weaver',
      controller: 'lotto-history'
    },
    data: querystring.stringify({
      gameName: game,
      drawNumber: draw
    })
  })
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    return error;
  });
}

const allResults = async (game) => {
  return new Promise(function(resolve, reject) {
    return paginator(game, 0, [], resolve, reject);
  })
  .then(function(response) {
    return response;
  });
}

const paginator = (game, page, results, resolve, reject) => {
  return axios({
    url: '/index.php',
    method: 'post',
    baseURL: 'https://www.nationallottery.co.za',
    params: {
      task: 'results.getViewAllURL',
      option: 'com_weaver',
      controller: 'lotto-history'
    },
    data: querystring.stringify({
      gameName: game,
      offset: page * 10,
      limit: 10
    })
  })
  .then(function (response) {
    const pagedResults = results.concat(response.data.data)

    if (response.data.message !== 'No Record Found') {
      paginator(game, page + 1, pagedResults, resolve, reject);
    } else {
      resolve(pagedResults);
    }
  })
  .catch(function (error) {
    reject(error);
  });
}

module.exports = { singleResult, allResults }

