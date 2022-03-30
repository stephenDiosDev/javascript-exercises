const add = function() {
	return sum([arguments[0], arguments[1]]);
};

const subtract = function() {
	return arguments[0] - arguments[1];
};

const sum = function() {
	let inputArr = [...arguments[0]];
  return inputArr.reduce((a, b) => a + b, 0);
};

const multiply = function() {
  let inputArr = [...arguments[0]];
  return inputArr.reduce((a, b) => a * b, 1);
};

const power = function() {
	return arguments[0] ** arguments[1];
};

const factorial = function() {
	let result = 1;

  for(let i = 1; i <= arguments[0]; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
