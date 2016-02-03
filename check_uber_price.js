// Run `npm install request` before running this script
var request = require('request');
var querystring = require('querystring');

var server_token = 'X5Svtc45OVGhABAdzM-hHaqdKFUdoe9P5KSJT-Ih'; 

if (process.argv.length != 6) {
  console.log("Need four arguments!");
  process.exit(1);
}

var query_cost = {
  'server_token': server_token,
  'start_latitude': process.argv[2],
  'start_longitude': process.argv[3],
  'end_latitude': process.argv[4],
  'end_longitude': process.argv[5],
};

// Unsafe and hacky, to get rid of potential cert issues
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

request('https://api.uber.com/v1/estimates/price?' + querystring.stringify(query_cost), function (error, response, body) {
  console.log(body);
});