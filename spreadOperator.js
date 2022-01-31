// Example of using the spread operator

const arr1 = ["JAN", "FEB", "MARCH", "APRIL", "MAY"];
let arr2;
(function() {
    arr2 = [...arr1];
    arr1[0] = "potato;"
})();
console.log(arr2);
console.log(arr1);