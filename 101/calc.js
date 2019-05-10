const student = {
  name: 'Camilo',
  age: 39,
  score: {
    math: 3,
    english: 4,
    development: 5,
  },
};

const sum = (a, b) => a + b;
const average = (...arr) => arr.reduce(sum, 0) / arr.length;

module.exports = {
  student,
  average,
};
