const { load, exists, save } = require('./dal.FILE');

const create = (data) => {
  if (!exists(data.name, create.name)) {
    return;
  }

  const subject = {
    math: data.math,
    english: data.english,
    development: data.development,
  };
  global.list[data.name] = subject;
  save();
};

const read = (data) => {
  if (!exists(data.name, read.name)) {
    return;
  }
  console.log(`Student: ${data.name}`);
  console.table(global.list[data.name]);
};

const update = (data) => {
  if (!exists(data.name, read.name)) {
    return;
  }

  const subject = {
    math: data.math,
    english: data.english,
    development: data.development,
  };
  global.list[data.name] = subject;

  save();
};

const remove = (data) => {
  if (!exists(data.name, read.name)) {
    return;
  }

  delete global.list[data.name];

  save();
};

module.exports = {
  create,
  read,
  update,
  remove,
};
