'use strict';

var fs = require('fs');
var path = require('path');
var http = require('http');
var dt = require('./myfirstmodule');

var db = require('./db.js');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type' : 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
  //res.end('Hello World');
}).listen(8080);

exports.get = function(event, context, callback) {
  var contents = fs.readFileSync(`public${path.sep}index.html`);
  var result = {
    statusCode: 200,
    body: contents.toString(),
    headers: {'content-type': 'text/html'}
  };

  
  callback(null, result);
};
