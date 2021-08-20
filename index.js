const expressSession = require('express-session');
const port = 3000;
var passport = require('passport');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cookieSession = require('cookie-session');
var flash = require('connect-flash');
var connection = require('./routes/mysqlconnect');
var route = require('./routes/router');
var reqLogin = require('./routes/requestLogin');
var app = express();

connection.connect();

app.set('views', __dirname + '/public')
app.set('view engine', 'ejs')
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use(expressSession({
    secret: 'feng',
    resave: false,
    saveUninitialized:true
}))

app.use('/', route)
app.use(reqLogin)

app.get('/pushdata', (req, res) => {
  var data = req.query.data;
  res.send({data: data});
  });

app.listen(port,() => {
    console.log("3000 port is on!")
})
