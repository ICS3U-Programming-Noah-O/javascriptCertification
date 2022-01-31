// What I learned about objects

var myDog = {
    "name" : "Indy",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["me", "you"]
};

// Dot notation allows you to access what is in objects

var dogProperties = myDog.name;
console.log(dogProperties);

// Bracket notation allows you to access what is in objects with spaces

dogProperties = myDog["friends"];
console.log(dogProperties);

// Updating object properties

myDog.name = "Jones";
dogProperties = myDog.name;
console.log(dogProperties);

// Adding properties to an object

myDog.fur = "Brown";
dogProperties = myDog.fur;
console.log(dogProperties);

// Or

myDog['fur'] = "Grey";
dogProperties = myDog.fur;
console.log(dogProperties);

// Deleteing properties from objects

console.log(myDog);
delete myDog.fur;
console.log(myDog);

// Checking object properties

function checkObj(checkProp) {
    if (myDog.hasOwnProperty(checkProp)) {
        return myDog[checkProp];
    } else {
        return "Not found";
    }
}
console.log(checkObj("tails"));
