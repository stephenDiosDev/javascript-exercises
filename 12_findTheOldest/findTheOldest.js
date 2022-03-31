const findTheOldest = function() {
    //run a reduce where the previous value is the oldest person so far
    let arr = [...arguments[0]];
    let oldestSoFar = arr[0];

    let oldestPerson = arr.reduce((oldestSoFar, newPerson) => {
        let oldestSoFarAge = 0;
        if("yearOfDeath" in oldestSoFar) {
            oldestSoFarAge = oldestSoFar.yearOfDeath - oldestSoFar.yearOfBirth;
        }
        else {
            oldestSoFarAge = (new Date()).getFullYear() - oldestSoFar.yearOfBirth;
        }

        let newPersonAge = 0;
        if("yearOfDeath" in newPerson) {
            newPersonAge = newPerson.yearOfDeath - newPerson.yearOfBirth;
        }
        else {
            newPersonAge = (new Date()).getFullYear() - newPerson.yearOfBirth;
        }

        if(newPersonAge <= oldestSoFarAge) {
            return oldestSoFar;
        }

        return newPerson;

    }, oldestSoFar);

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
