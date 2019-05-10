const sum = (a, b) => a + b;

const average = (...arr) => {
  const result = arr.reduce(sum, 0) / arr.length;
  return result;
};

const wait = (callback, ...arr) => {
  setTimeout(() => {
    const result = average(...arr);
    callback(result);
  }, 2 * 1000);
};

const result = (result) => {
  console.log('Average ' + result);
};
wait(result, 2, 3, 4, 5, 6);

console.log('Average ' + average(2, 3, 4, 5));
