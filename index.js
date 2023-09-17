// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    const newCats = [...cats];
    newCats.push(name);
    return newCats;
}

function prependCat(name) {
    const manyCats = [...cats];
    manyCats.unshift(name);
    return manyCats;
}

function removeLastCat() {
    const lessCats = cats.slice(0,cats.length -1);
    return lessCats;
}

function removeFirstCat() {
    const fewCats = cats.slice(1);
    return fewCats;
}