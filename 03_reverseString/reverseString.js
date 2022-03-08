const reverseString = function() {
    let strArr = [...arguments[0]];
    let resArr = [];

    for(let i = strArr.length - 1; i >= 0; i--) {
        resArr.push(strArr[i]);
    }

    let result = resArr.join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;
