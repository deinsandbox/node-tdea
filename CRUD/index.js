const { argv } = require('./yargs');
const operations = require('./operations');

const command = argv._[0];
operations[command](argv);
