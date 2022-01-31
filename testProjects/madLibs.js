// This program is a mad libs game

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    
    var myResult = "";
    myResult += "The " + myAdjective + " " + myNoun + " " + myAdverb + " " + myVerb;
    
    return myResult;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));