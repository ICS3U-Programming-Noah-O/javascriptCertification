// Basic arrays

var array1 = [1, 4, 5, 6];
console.log(array1);

// Nested arrays

var nestArray = ["hi", 1, [3, "bye"], ["noah, 4"]];
console.log(nestArray[0]);
console.log(nestArray[2][1]);

//Appending data to an array

array1.push("hi");
console.log(array1);

//Removing items from arrays

var arrayRemove = array1.pop([4]);
console.log(arrayRemove);

//Removing the first element of the array

arrayRemove = array1.shift();
console.log(array1);

// Adding an elemment to the beginning of an array
array1.unshift("Hey");
console.log(array1);