var express = require('express');

var app = express();

app.get('/', function(request, response) {
  console.log("entering get /");
  response.send("Hello");
});

app.get('/headers', function(request, response) {
  response.json(request.headers);
});

app.get('/headers/:header_name', function(request, response) {
  var headerName = request.params.header_name;
  //can i make this a one liner?
  var jsonResponse = {};
  jsonResponse[headerName] = request.headers[headerName];
  response.json(jsonResponse);
});

app.get('/version', function(request, response) {
  //can i make this a one liner?
  var jsonResponse = {};
  jsonResponse['http-version'] = request.httpVersion;
  response.json(jsonResponse);
});

app.listen(8080);