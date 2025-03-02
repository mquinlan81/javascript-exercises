const add = function (...args) {
  return args.reduce((acc, cur) => (acc = cur + acc));
};

const subtract = function (...args) {
  return args.reduce((acc, cur) => (acc = acc - cur));
};

const sum = function (arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    return arr.reduce((acc, cur) => (acc = cur + acc));
  }
};

const multiply = function (arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    return arr.reduce((acc, cur) => (acc = cur * acc));
  }
};

const power = function (...args) {
  return args.reduce((acc, cur) => (acc = acc ** cur));
};

const factorial = function (num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
