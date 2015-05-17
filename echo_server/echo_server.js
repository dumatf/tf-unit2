var express = require('express');

var EchoServer = function() {
  this.app = express();
  
  this.app.get('/', function(request, response) {
    console.log("entering get /");
    response.send("Hello");
  });
  
  this.app.get('/headers', function(request, response) {
    response.json(request.headers);
  });
  
  this.app.get('/headers/:header_name', function(request, response) {
    var headerName = request.params.header_name;
    //can i make this a one liner?
    var jsonResponse = {};
    jsonResponse[headerName] = request.headers[headerName];
    response.json(jsonResponse);
  });
  
  this.app.get('/version', function(request, response) {
    //can i make this a one liner?
    var jsonResponse = {};
    jsonResponse['http-version'] = request.httpVersion;
    response.json(jsonResponse);
  });
  
  this.listen = function () {
    this.app.listen(8080);
  }
};

exports.EchoServer = EchoServer;