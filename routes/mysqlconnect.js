var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'user1',
  password : '7385',
  database : 'node_db'
	})

connection.connect();
module.exports = connection;