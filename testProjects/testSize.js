// This program tests the size of a number
function testSize(num) {
    if (num < 5) {
        return "tiny";
    } else if (num < 10) {
        return "small";
    } else if (num < 15) {
        return "medium";
    } else if (num < 20) {
        return "large";
    } else {
        return "huge";
    }
}
console.log(testSize(21))