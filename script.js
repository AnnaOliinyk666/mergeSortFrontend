function getInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function createArray(n) {
  return Array.from({ length: n },
    (_, i) => 0);
}