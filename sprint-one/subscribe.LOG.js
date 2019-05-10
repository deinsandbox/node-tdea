const { stripIndents } = require('common-tags');
const fs = require('fs');

const makeFile = ({ student, takes }) => {
  const print = stripIndents`
        Document  : ${student.document}
        Name      : ${student.name}
        Course    : ${takes.id}
        Title     : ${takes.title}
        Length    : ${takes.length} weeks
        Price     : ${takes.price} U$
    `;
  fs.writeFile('sprint-one/files/enrollment.txt', print, (err) => {
    if (err) {
      throw error;
    }
    console.log(`Student "${student.name}" was successful enrolled to "${takes.title}" course`);
  });
};

module.exports = {
  makeFile,
};
