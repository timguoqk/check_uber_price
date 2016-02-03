var querystring = require('querystring');

var request = require('request');
var _ = require('underscore');

var server_token = 'X5Svtc45OVGhABAdzM-hHaqdKFUdoe9P5KSJT-Ih'; 
// Services that you are interested
var targets = ['uberX'];

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
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// Get current time
console.log(new Date());

request('https://api.uber.com/v1/estimates/price?' + querystring.stringify(query_cost), function (error, response, body) {
  var out = '';
  _.filter(JSON.parse(body)['prices'], function(p) {
    return _.contains(targets, p.display_name);
  })
    .forEach(function(p) {
      out += p.display_name;
      out += ' Surge: X' + p.surge_multiplier;
      out += ' Price: ' + p.estimate;
      out += '\n';
    });
  console.log(out);
});