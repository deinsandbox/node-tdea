const { courses } = require('./data.js');
const { header, detail, footer } = require('./course.WEB');
const express = require('express');
const app = express();
const { styles } = require('./styles');

let delayInSeconds;

const choices = () => courses.map((course) => course.id);

const find = (id) => {
  const detail = courses.find((course) => course.id === id);
  return detail;
};

const filter = (id) => {
  const detail = courses.filter((course) => course.id === id);
  return detail;
};

const list = (time) => {
  try {
    if (time < 0) {
      throw 'Time must be a positive number';
    }
    delayInSeconds = time;

    let text = styles();
    text += header();
    courses.forEach((element) => {
      text += detail(element);
    });
    text += footer(courses.length, time);

    app.get('/', function(req, res) {
      res.send(text);
    });

    app.listen(3000);
  } catch (error) {
    console.log(`ERROR -> ${error}`);
  }
};

module.exports = {
  choices,
  find,
  filter,
  list,
};
