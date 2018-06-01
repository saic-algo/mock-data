var fs = require('fs');
var faker = require('faker');
var moment = require('moment');
var _ = require('lodash');
var geo = require('./geo.js');
var count = require('./count.js');
var util = require('./util.js');

faker.locale = "zh_CN";

var generateUser = function() {
  return {
    uuid: faker.random.uuid(),
    name: faker.name.firstName() + faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    ip: faker.internet.ip(),
    mac: faker.internet.mac(),
    status: 'offline',
    location: {},
  };
};

// generate drivers and guests data
var guests = Array(2000).fill(null).map(() => generateUser());
var drivers = Array(100).fill(null).map(() => generateUser());

// user state
var deals_log = [];




var timeflow = function(guests, drivers, current) {
  // random active driver
  var driver;
  var guest;

  if (util.probability(2 / 3)) {
    var activeAvailableDrivers = _.filter(drivers, (driver) => driver.status == 'offline');
    driver = util.getRandomItem(activeAvailableDrivers);
    if (driver) {
      driver.status = 'online';
      driver.location = geo.getRandomLocation();
      // [TODO]add state log
    }
  }

  // random deactive driver
  if (util.probability(1 / 2)) {
    var deactiveAvailableDrivers = _.filter(drivers, (item) => item.status == 'online');
    var driver = util.getRandomItem(deactiveAvailableDrivers);
    if (driver) {
      driver.status = 'offline';
      // [TODO]add state log
    }
  }

  // random active guests to request
  var activeGuests = _.filter(guests, (guest) => guest.status == 'offline');
  var guest = util.getRandomItem(activeGuests);

  if (guest) {
    var deal = {};
    deals_log.push(deal);
    deal.guest = guest;
    deal.guest_uuid = guest.uuid;
    deal.guest_name = guest.name;
    deal.departure = geo.getRandomLocation();
    deal.destination = geo.getRandomLocation();
    deal.request_time = current.toDate();
    deal.status = 'request';
    guest.status = 'calling';

    // driver accept the request
    if (util.probability(2 / 3)) { 
      var availableDrivers = _.filter(drivers, (driver) => driver.status == 'online');
      var driver = util.getRandomItem(availableDrivers);
      if (driver) {
        deal.driver = driver;
        deal.driver_uuid = driver.uuid;
        deal.driver_name = driver.name;
        deal.status = 'running';
        deal.driver_arrive_time = current.add(5, 'minutes').toDate();
        deal.journey_start_time = current.add(7, 'minutes').toDate();
        deal.journey_end_time = current.add(37, 'minutes').toDate();
        driver.status = 'running';
      } else { // no available driver
        deal.status = 'cancel';
      }
    } else { // no accept
      deal.status = 'cancel';
    }
  } 

  // handle the running deal
  _.map(deals_log, (deal) => {
    if (current.isAfter(moment(deal.journey_end_time))) {
      deal.status = 'finished';
      deal.guest.status = 'offline';
      deal.driver.status = 'online';
      deal.driver.location = deal.guest.destination;
    }
  });
};

var startDate = moment('2018-01-01').startOf('day');
var endDate = moment('2018-01-10').startOf('day');;
var current = startDate;

while (current.isBefore(endDate)) {
  timeflow(guests, drivers, current);
  current = current.add(10, 'minutes');
}

console.log(guests);
console.log(drivers);
console.log(deals_log);

fs.writeFile('./data/drivers.json', JSON.stringify(drivers, null, 4));
fs.writeFile('./data/guests.json', JSON.stringify(guests, null, 4));
fs.writeFile('./data/deals.json', JSON.stringify(deals_log, null, 4));
