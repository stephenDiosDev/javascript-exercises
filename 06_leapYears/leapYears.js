const leapYears = function() {
    let year = arguments[0];

    if(typeof(year) != "number" || year < 0)
        return false;

    if(year % 100 == 0) {
        if(year % 400 == 0)
            return true;
        else
            return false;
    }
    else if(year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
