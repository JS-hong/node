const expressSession = require('express-session');
var passport = require('passport');
var express = require('express');
var path = require('path');
var route = require('./routes/router');
var passport = require('passport');
var flash = require('connect-flash');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cookieSession = require('cookie-session');
var app = express();

const http = require('http');
const port = 3000;

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

app.get('/pushdata', (req, res) => {
  var data = req.query.data;
  res.send({data: data});
  });

app.use('/', route)

app.listen(port, () => {
    console.log("3000 port is on!")
})
