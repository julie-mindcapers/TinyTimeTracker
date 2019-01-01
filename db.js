// MySQL interface

var mysql = require('mysql');
var db_private = require('./db_private.js');

var con = mysql.createConnection(db_private.host, 
   db_private.username, 
   db_private.password);

con.connect(function(err) {
    if (err) throw err;
   console.log("Connected");
});
