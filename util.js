exports.getRandomItem = function(items) {
  return items[Math.floor(Math.random() * items.length)];
};

exports.probability = function(v) {
  return Math.random() < v;
};

