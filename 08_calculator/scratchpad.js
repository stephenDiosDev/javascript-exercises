const sum = function() {
	let inputArr = [...arguments[0]];
  console.log("Input arr: " + inputArr);
  return inputArr.reduce((a, b) => a + b, 0);
};


console.log(sum([1]));