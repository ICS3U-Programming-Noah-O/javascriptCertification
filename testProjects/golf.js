// This program is a golf game

var shotNames = ["Hole in one!", "Eagle!", "Birdie!", "Par!", "Bogey!", "Double Bogey!", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return(shotNames[0]);
    } else if (strokes == par - 2) {
        return(shotNames[1]);
    } else if (strokes == par - 1) {
        return(shotNames[2]);
    } else if (strokes == par) {
        return(shotNames[3]);
    } else if (strokes == par + 1) {
        return(shotNames[4]);
    } else if (strokes == par + 2) {
        return(shotNames[5]);
    } else {
        return(shotNames[6]);
    }
}
console.log(golfScore(6, 5));