const { stripIndents } = require('common-tags');

const header = () => {
  const print = stripIndents`
      ┌─────────┬───────────────┬───────────┬─────────┐
      │   ID    │    TITULO     │ DURACIÓN  │ PRECIO  │
      ├─────────┼───────────────┼───────────┼─────────┤
    `;
  console.log(print);
};

const detail = ({ id, title, length, price }) => {
  const print = stripIndents`
      │ ${id.padEnd(7)} │ ${title.padEnd(13)} │ ${(length + ' dias').padStart(9)} │ ${(price + ' U$').padStart(7)} │
    `;
  console.log(print);
};

const footer = (length, time) => {
  setTimeout(() => {
    const print = stripIndents`
      └─────────┴───────────────┴───────────┴─────────┘
    `;
    console.log(print);
  }, (length - 1) * time * 1000);
};

module.exports = {
  header,
  detail,
  footer,
};
