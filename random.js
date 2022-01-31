// This program generates random numbers
// Random decimal number
function randomFraction() {
    
    return Math.random(0);
}
console.log(randomFraction());

// Random whole number

function randomWhole() {
    
    return Math.floor(Math.random(0) * 20);
}
console.log(randomWhole());

// Random whole numbers within a range

function randomRange(min, max) {
    
    return Math.floor(Math.random(0) * (max - min + 1)) + min;
}
console.log(randomRange(2,6));
