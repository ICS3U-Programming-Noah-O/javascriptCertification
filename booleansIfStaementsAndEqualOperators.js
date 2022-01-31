// Boolens, if statements, and operators

function trueOrFalse(isItTrue) {
    if (isItTrue == true) {
        return "Yay! It's true";
    } else {
        return "It is false";
    }
}
console.log(trueOrFalse(true));

/* Comparison operators
==
!=
<
>
<=
>=

Strict equality operators
===
!==
Input is not converted to differnet data types
*/
function threeTest(num) {
    if (num === '3') {
        return("Equal");
        
    } else {
        return("Not equal");
    }
}
console.log(threeTest(3));
console.log(" ");

// Example

function compareEquality(a, b) {
    if (a === b) {
        return("Equal");
    } else {
        return("Not equal");
    }
}
console.log(compareEquality(10, "10"));


// And operator

function testAndOperator(num) {
    if (num >= 50 && num <= 100) {
        return("Your number is between 50 and 100");
    } else {
        return("Your number is below 50 or above 100");
    }
}
console.log(testAndOperator(76));

// Or operator

function testOrOperator(num) {
    if (num >= 50 || num <= 100) {
        return("Your number is between 50 and 100");
    } else {
        return("Your number is below 50 or above 100");
    }
}
console.log(testAndOperator(12));
