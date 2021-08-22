const mysql = require('mysql');
const connection_info=({
  host     : 'localhost',
  user     : 'user1',
  password : '7385',
  database : 'node_db'
});

let connection = mysql.createConnection(connection_info);

module.exports = connection;