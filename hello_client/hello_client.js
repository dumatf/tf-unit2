var unirest = require('unirest');

// http://www.thinkful.com/
unirest.get('http://carbon-bolt-22-225776.use1-2.nitrousbox.com:8080/headers/host').end(function(response) {
  console.log('Status:', response.statusCode);
  console.log('Headers:', response.headers);
  console.log('Body:', response.body);
});