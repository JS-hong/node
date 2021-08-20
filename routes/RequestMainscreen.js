var express = require('express');
var connection = require('./routes/mysqlconnect');
var app = express();

connection.connect();

