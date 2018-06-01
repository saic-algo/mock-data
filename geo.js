var _ = require('lodash');
var locations = require('./location.json');

exports.getDistance = function (lat1, lon1, lat2, lon2) {
  // Converts numeric degrees to radians
  function toRad(Value) {
    return Value * Math.PI / 180;
  }
  var R = 6371; // km
  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

exports.getRandomLocation = function() {
  return locations[Math.floor(Math.random() * locations.length)];
};