const { html } = require('common-tags');
const express = require('express');
const app = express();
const { styles } = require('./styles');

const makeFile = ({ student, takes }) => {
  let text = styles();

  const print = html`
    <table>
      <tr>
        <td><strong>Documento:</strong></td>
        <td>${student.document}</td>
      </tr>
      <tr>
        <td><strong>Nombre:</strong></td>
        <td>${student.name}</td>
      </tr>
      <tr>
        <td><strong>Curso:</strong></td>
        <td>${takes.id}</td>
      </tr>
      <tr>
        <td><strong>Titulo:</strong></td>
        <td>${takes.title}</td>
      </tr>
      <tr>
        <td><strong>Duración:</strong></td>
        <td>${takes.length} dias</td>
      </tr>
      <tr>
        <td><strong>Precio:</strong></td>
        <td>${takes.price} U$</td>
      </tr>
    </table>
  `;

  text += print;
  app.get('/', function(req, res) {
    res.send(text);
  });

  app.listen(3000);
};

module.exports = {
  makeFile,
};
