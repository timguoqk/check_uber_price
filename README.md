# uber_check
Check Uber's price and estimated wait time.

## Setup
You need to set `var server_token = 'INSERT_SERVER_TOKEN_HERE'; ` to your Uber API's server token. You get the token for free from https://developer.uber.com/.

If you want to check services other than UberX, add them to `var targets = ['uberX'];`.

## Usage
`npm install` then `npm run check start_latitude start_longitude end_latitude end_longitude`. You can get the latitude and longitude information using online tools like http://www.latlong.net/.

It's often useful to check the price at a future time. It's easy to accomplish this by using the linux tool `at` to run uber_check.