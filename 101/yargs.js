const { average } = require('./calc');

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

console.log(argv);

// Long Arguments
// Error: node 101/yargs --math=5
// Success: node 101/yargs --math=5 --english=3 --development=5
console.log(`Math score: ${argv.math}`);

// Short Arguments
// Error: node 101/yargs avg -m=5 -e=3
// Success: node 101/yargs avg -m=5 -e=3 -d=5
const result = average(argv.m, argv.e, argv.d);
console.log(`Average score: ${result}`);
