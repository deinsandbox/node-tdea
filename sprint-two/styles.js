const { html } = require('common-tags');

const styles = () => {
  const print = html`
    <style>
      table {
        border-collapse: collapse;
      }

      table,
      th,
      td {
        border: 1px solid black;
        padding: 5px;
      }
    </style>
  `;
  return print;
};

module.exports = {
  styles,
};
