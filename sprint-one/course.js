const { courses } = require('./data.js');
const { header, detail, footer } = require('./course.UI');

let delayInSeconds;

const choices = () => courses.map((course) => course.id);

const find = (id) => {
  const detail = courses.filter((course) => course.id === id);
  return (detail && detail[0]) || {};
};

const wait = (item, index) => {
  setTimeout(() => {
    detail(item);
  }, index * delayInSeconds * 1000);
};

const list = (time) => {
  try {
    if (time < 0) {
      throw 'Time must be a positive number';
    }
    delayInSeconds = time;

    header();
    courses.forEach((element, index) => {
      wait(element, index);
    });
    footer(courses.length, time);
  } catch (error) {
    console.log(`ERROR -> ${error}`);
  }
};

module.exports = {
  choices,
  find,
  list,
};
