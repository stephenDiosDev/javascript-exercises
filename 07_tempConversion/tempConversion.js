const ctof = function() {
  let t = arguments[0];

  if(typeof(t) != "number") {
    return "ERROR";
  }

  let temp = t * (9 / 5) + 32;

  return (Math.round(temp * 10) / 10);
};

const ftoc = function() {
  let t = arguments[0];

  if(typeof(t) != "number") {
    return "ERROR";
  }

  let temp = (t - 32) * (5 / 9);

  return (Math.round(temp * 10) / 10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
