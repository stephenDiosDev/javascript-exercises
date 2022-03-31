const fibonacci = function() {
    let input = parseInt(arguments[0]);

    if(input < 0) {
        return "OOPS";
    }

    let index = 2;

    let a = 0, b = 1;
    let fib = a + b;

    while(index < input) {
        a = b;
        b = fib;
        fib = a + b;

        index++;
    }

    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
