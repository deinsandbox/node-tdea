const { html } = require('common-tags');

const header = () => {
  const print = html`
    <table>
      <tr>
        <th>ID</th>
        <th>TITULO</th>
        <th>DURACIÓN</th>
        <th>PRECIO</th>
      </tr>
    </tr>
  `;
  return print;
};

const detail = ({ id, title, length, price }) => {
  const print = html`
    <tr>
      <td>${id.padEnd(7)}</td>
      <td>${title.padEnd(13)}</td>
      <td>${(length + ' dias').padStart(9)}</td>
      <td>${(price + ' U$').padStart(7)}</td>
    </tr>
  `;
  return print;
};

const footer = () => {
  const print = html`
    </table>
  `;
  return print;
};

module.exports = {
  header,
  detail,
  footer,
};
