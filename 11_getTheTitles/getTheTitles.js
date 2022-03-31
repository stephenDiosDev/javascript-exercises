const getTheTitles = function() {
    let arr = [...arguments[0]];
    let titles = arr.map(book => `${book.title}`);

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
