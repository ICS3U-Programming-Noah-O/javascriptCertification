// Loops

// While loops

var myArray = [];
var i = 0;

while(i < 20) {
    myArray.push(i);
    i++;
    console.log(myArray);
}

// For loops
myArray = [];
i = 0;
for (i = 0; i < 10; i++) {
    myArray.push(i);
    console.log(myArray);
}

var total = 0;
i = 0;
for (i = 0; i < myArray.length; i++) {
    total += myArray[i];
    console.log(total);
}

// Do..While Loops

myArray = [];
i = 0;

do {
    myArray.push(i);
    i++;
    console.log(myArray);
} while(i < 20);

