'use strict';

// const sqs = require('../lib/aws/sqs');
const request = require('../lib/request/ithuba');
const competition = require('./config/competition');

module.exports.fetch = async (event, context) => {
  const results = await request.allResults('LOTTO');

  console.log(results);
};

module.exports.pull = async (event, context) => {
  const draw = context.draw;
  const response = await request.singleResult(context.draw, 'LOTTO');
  const drawDetails = response.data.drawDetails;

  const payload = {
    id: parseInt(drawDetails.drawNumber),
    date: drawDetails.drawDate,
    machine: drawDetails.drawMachine,
    ball_set: drawDetails.ballSet,
    competition: competition,
    results: [{
      name: 'Ball 1',
      value: parseInt(drawDetails.ball1),
      position: 1
    }, {
      name: 'Ball 2',
      value: parseInt(drawDetails.ball2),
      position: 2
    }, {
      name: 'Ball 3',
      value: parseInt(drawDetails.ball3),
      position: 3
    }, {
      name: 'Ball 4',
      value: parseInt(drawDetails.ball4),
      position: 4
    }, {
      name: 'Ball 5',
      value: parseInt(drawDetails.ball5),
      position: 5
    }, {
      name: 'Ball 6',
      value: parseInt(drawDetails.ball6),
      position: 6
    }, {
      name: 'Bonus Ball',
      value: parseInt(drawDetails.bonusBall),
      position: 7
    }],
    prizes: [{
      name: 'Match 6',
      payout: parseFloat(drawDetails.div1Payout),
      winners: parseInt(drawDetails.div1Winners),
      position: 1
    }, {
      name: 'Match 5 + Bonus Ball',
      payout: parseFloat(drawDetails.div2Payout),
      winners: parseInt(drawDetails.div2Winners),
      position: 2
    }, {
      name: 'Match 5',
      payout: parseFloat(drawDetails.div3Payout),
      winners: parseInt(drawDetails.div3Winners),
      position: 3
    }, {
      name: 'Match 4 + Bonus Ball',
      payout: parseFloat(drawDetails.div4Payout),
      winners: parseInt(drawDetails.div4Winners),
      position: 4
    }, {
      name: 'Match 4',
      payout: parseFloat(drawDetails.div5Payout),
      winners: parseInt(drawDetails.div5Winners),
      position: 5
    }, {
      name: 'Match 3 + Bonus Ball',
      payout: parseFloat(drawDetails.div6Payout),
      winners: parseInt(drawDetails.div6Winners),
      position: 6
    }, {
      name: 'Match 3',
      payout: parseFloat(drawDetails.div7Payout),
      winners: parseInt(drawDetails.div7Winners),
      position: 7
    }, {
      name: 'Match 2 + Bonus Ball',
      payout: parseFloat(drawDetails.div8Payout),
      winners: parseInt(drawDetails.div8Winners),
      position: 8
    }]
  };

  console.log(payload);
};
