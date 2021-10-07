var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'awslinedb.csib3pszn1ih.us-east-2.rds.amazonaws.com',
  user     : 'Line',
  password : '7385429l',
  database : 'Line_db'
	})

connection.connect();
module.exports = connection;
