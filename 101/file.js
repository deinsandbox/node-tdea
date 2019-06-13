const { stripIndents } = require('common-tags');

const { student, average } = require('./calc');
const fs = require('fs');

console.log(`Student name is: ${student.name}`);

const longResult = average(student.score.math, student.score.english, student.score.development);
console.log(`Student average: ${longResult}`);

const {
  name,
  age: years,
  score: { math, english, development },
} = student;

console.log(`Student name: ${name}`);

const shortResult = average(math, english, development);
console.log(`Student average: ${shortResult}`);

console.log(`Student age: ${years}`);

const makeFile = () => {
  const print = stripIndents`
        Student : ${name}
        average : ${shortResult}
    `;
  fs.writeFile('101/files/average.txt', print, (error) => {
    if (error) {
      throw error;
    }
    console.log('File was created');
  });
};

makeFile();
