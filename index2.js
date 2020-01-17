const { fetchMyIP } = require('./iss_promised');
// index2.js
fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body));
