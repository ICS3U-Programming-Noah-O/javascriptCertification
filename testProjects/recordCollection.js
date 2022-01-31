// This program allows a user to access a record collection

var collection = {
    '1' : {
        "album" : "Houses of the Holy",
        "artist" : "Led Zeppelin",
        "tracks" : [
            "The Song Remains the Same",
            "The Rain Song",
            "Over the Hills and Far Away",
            "The Crunge",
            "Dancing Days",
            "D'yer Mak'er",
            "No Quarter",
            "The Ocean"
        ]
    },
    '2' : {
        "album" : "Signals",
        "artist" : "Rush",
        "tracks" : [
            "Subdivisions",
            "The Analog Kid",
            "Chemistry",
            "Digital Man",
            "The Weapon (Part II of Fear)",
            "New World Man",
            "Losing It",
            "Countdown"
        ]
    },
    '3' : {
        "album" : "Surfin' USA",
        "artist" : "The Beach Boys",
        "tracks" : [
            "Surfin' USA",
            "Farmer's Daughter",
            "Misirlou",
            "Stoked",
            "Lonely Sea",
            "Shut Down",
            "Noble Surfer",
            "Honky Tonk",
            "Lana",
            "Surf Jam",
            "Let's Go Trippin'",
            "Finders Keepers"
        ]
    },
    '4' : {
        "artist" : "The Rolling Stones",
        "tracks" : []
    },
    '5' : {
        "album" : "From the Fires"
    },
    
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
    
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    
    
    return collection;
}

console.log(updateRecords(5, "artist", "Greta Van Fleet"));