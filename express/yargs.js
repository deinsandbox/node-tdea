const { average } = require('../101/calc');
const express = require('express');
const app = express();

const args = {
  math: {
    default: 0,
    alias: 'm',
  },
  english: {
    default: 0,
    alias: 'e',
  },
  development: {
    alias: 'd',
    demand: true,
  },
};

const argv = require('yargs')
  .command('avg', 'Calc score average', args)
  .options(args)
  .usage('Usage: $0 -math=[num] -english=[num] -development=[num]')
  .demandOption(['development']).argv;

// Success: node express/yargs avg -m=5 -e=3 -d=5
const result = average(argv.m, argv.e, argv.d);
const text = `Average score: ${result}`;

app.get('/', function(req, res) {
  res.send(text);
});

app.listen(3000);
