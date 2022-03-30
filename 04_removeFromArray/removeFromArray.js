const removeFromArray = function() {
    let args = [...arguments];
    let inArr = [...args.shift()];
    console.log(args);
    console.log(inArr);
    
    for(let i = 0; i < args.length; i++) {
        let elem = args[i];
        let index = inArr.indexOf(elem);
        if(index >= 0) {
            console.log("Found elem [" + elem + "] at index " + index);
            inArr.splice(index, 1);
            console.log("Resulting array: " + inArr);
        }
        else {
            console.log("Elem [" + elem + "] not found!");
        }
    }

    return inArr;
};

// Do not edit below this line
module.exports = removeFromArray;
