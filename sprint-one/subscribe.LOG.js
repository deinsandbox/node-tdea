const { stripIndents } = require('common-tags');
const fs = require('fs');

const makeFile = ({ student, takes }) => {
  const print = stripIndents`
        Documento : ${student.document}
        Nombre    : ${student.name}
        Curso     : ${takes.id}
        Titulo    : ${takes.title}
        Duración  : ${takes.length} dias
        Precio    : ${takes.price} U$
    `;
  fs.writeFile('sprint-one/files/enrollment.txt', print, (err) => {
    if (err) {
      throw error;
    }
    console.log(`El estudiante "${student.name}" ha sido matriculados en el curso "${takes.title}"`);
  });
};

module.exports = {
  makeFile,
};
