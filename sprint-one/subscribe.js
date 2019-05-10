const course = require('./course');
const { makeFile } = require('./subscribe.LOG');

let data = { student: {}, takes: {} };

const add = (id, student) => {
  data.student = student;
  data.takes = course.find(id);
  makeFile(data);
};

module.exports = {
  add,
};
