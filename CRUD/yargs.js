const name = {
  demand: true,
  alias: 'n',
};

const math = {
  demand: true,
  alias: 'm',
};

const english = {
  demand: true,
  alias: 'e',
};

const development = {
  demand: true,
  alias: 'd',
};

const create = {
  name,
  math,
  english,
  development,
};

const read = {
  name,
};

const update = {
  name,
  math,
  english,
  development,
};

const remove = {
  name,
};

const argv = require('yargs')
  .command('create', 'Create an Student', create)
  .command('read', 'Read an Student', read)
  .command('update', 'Update an Student', update)
  .command('remove', 'Read an Student', remove)
  .strict()
  .demandCommand().argv;

module.exports = {
  argv,
};
