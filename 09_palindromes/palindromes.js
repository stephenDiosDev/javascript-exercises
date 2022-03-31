const palindromes = function () {
//do a loop and for each character check if is within the ascii letters
//if so, convert to lowercase and add to string/array
//loop with 2 counters, one at end and one at beginning and go til middle
//if at any point they differ, fail
    let letters = [];
    let input = arguments[0];

    //console.log(input);

    for(let i = 0; i < input.length; i++) {
        let c = input.charCodeAt(i);
        if((c > 96 && c < 123) || (c > 64 && c < 91)) {
            letters.push(c);
        }
    }

    //convert any uppercase to lowercase
    let cleanInput = letters.map(a => a < 97 ? a + 32 : a);
    let reversed = [];

    for(let i = cleanInput.length - 1; i >= 0; i--) {
        reversed.push(cleanInput[i]);
    }

    console.log(cleanInput);
    console.log(reversed);

    for(let j = 0; j < cleanInput.length; j++) {
        if(cleanInput[j] != reversed[j]) {
            return false;
        }
    }

    return true;
    //[aba] --> 3 / 2 = 1.5 -> 1
    //[abba] --> 4 / 2 = 2  -> 2

};

// Do not edit below this line
module.exports = palindromes;
