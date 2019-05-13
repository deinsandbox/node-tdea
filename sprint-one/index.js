const course = require('./course');
const subscribe = require('./subscribe');

const argsCourse = {
  time: {
    alias: 't',
    default: 2,
    describe: 'Time delay',
    type: 'number',
  },
};

const argsSubscribe = {
  id: {
    alias: 'i',
    choices: course.choices(),
    describe: 'Course ID',
    demand: true,
    type: 'string',
  },
  document: {
    alias: 'd',
    demand: true,
    describe: 'Student document',
    type: 'number',
  },
  name: {
    alias: 'n',
    demand: true,
    describe: 'Student name',
    type: 'string',
  },
};

const argv = require('yargs')
  .command(['courses', '$0'], 'Show available courses list', argsCourse, ({ time }) => course.list(time))
  .usage('Usage: $0 -time=[num in seconds]')
  .command('subscribe', 'Subscribe student in course', argsSubscribe, ({ id, document, name }) => subscribe.add(id, { document, name }))
  .usage('Usage: $0 -course=[id] -document=[num] -name=[string]')
  .strict()
  .demandCommand().argv;
