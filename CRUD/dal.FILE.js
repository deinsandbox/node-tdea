const fs = require('fs');
const color = require('colors');

global.list = {};

const load = () => {
  try {
    //list = require('CRUD/files/list.json');
    const data = fs.readFileSync('CRUD/files/list.json');
    global.list = JSON.parse(data);
  } catch (error) {
    global.list = {};
    console.log(`File not exists`.red);
  }
};

const exists = (id, operation) => {
  load();
  const find = global.list[id];
  if (operation === 'create' && find) {
    console.log(`Student already exists`.red);
    return false;
  } else if (!find) {
    console.log(`Student doesn't exists`.red);
    return false;
  }
  return true;
};

const save = () => {
  const data = JSON.stringify(global.list, null, 4);
  fs.writeFile('CRUD/files/list.json', data, (error) => {
    if (error) {
      throw error;
    }
    console.log(`File was saved successfully`.green);
  });
  show();
};

const show = () => {
  console.table(list);
};

module.exports = {
  exists,
  save,
  show,
};
