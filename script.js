function getInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function createArray(n) {
  return Array.from({ length: n },
    (_, i) => 0);
}

function fill(collection, minValue, maxValue) {
  let size = collection.length;
  for (let i = 0; i < collection.length; i++) {
    collection[i] = getInteger(minValue, maxValue);
  }
  collection = collection.sort((x, y) => x - y);
}

function print(text, collection) {
  document.write(`${text} ${collection}<br>`);
}