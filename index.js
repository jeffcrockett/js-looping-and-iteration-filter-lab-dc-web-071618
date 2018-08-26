// Code your solution in this file
function findMatching(items, item) {
    return items.filter(function(e){
        return e.toLowerCase() === item.toLowerCase();
    })
}

function fuzzyMatch(items, letters) {
    return items.filter(function(e){
        return e.includes(letters) && e.indexOf(letters) === 0;
    })
}

function matchName(items, name) {
    return items.filter(function(e){
        return e.name === name
    })
}