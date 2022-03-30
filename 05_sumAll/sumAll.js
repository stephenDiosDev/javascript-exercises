const sumAll = function() {
    let a = arguments[0];
    let b = arguments[1];
    let sum = 0;

    if(!(typeof(a) == "number" && typeof(b) == "number")) {
        return "ERROR";
    }

    if(a < 0 || b < 0) {
        return "ERROR";
    }

    if(a > b) {
        let temp = b;
        b = a;
        a = temp;
    }

    for(a; a <= b; a++) {
        sum += a;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
