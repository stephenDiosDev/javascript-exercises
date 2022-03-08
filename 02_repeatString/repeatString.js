const repeatString = function() {
    let str = arguments[0];
    let num = arguments[1];
    let result = "";

    if(num < 0) {
        result = "ERROR";
    }

    for(let i = 0; i < num; i++) {
        result += str;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
