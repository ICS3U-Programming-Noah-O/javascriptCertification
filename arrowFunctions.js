// Examples of arrow functions

var magic = function() {
    return new Date();
};

// Is the same as:

var magic2 = () => {
    return new Date();
};

// Or

const magic3 = () => new Date();

// Arrow functions with parameters

var myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4]))