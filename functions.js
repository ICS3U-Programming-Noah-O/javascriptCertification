// This program is everything that I've learned about functions in javascript

// Function example
function firstFunction() {
    console.log("Hi");
}

firstFunction();

//Parameters

function functionWithParameters(a, b) {
    var total = a + b;
    return total;
}

var finalTotal = functionWithParameters(3, 9);
console.log(finalTotal);

// Stand in line

function nextInLine(arr, item) {
    
    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before : " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));