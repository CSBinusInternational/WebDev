// map

const numbers = [1, 2, 3, 4];
const trippled = numbers.map(item => item * 3);
console.log(trippled);

// filter

const numbers1 = [1, 2, 3, 4];
const evens = numbers1.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]

//reduce

const numbers2 = [1, 2, 3, 4];
const sum = numbers2.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); // 10