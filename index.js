const expressSession = require('express-session');
var passport = require('passport');
var express = require('express');
var path = require('path');
var route = require('./routes/router');
var passport = require('passport');
var flash = require('connect-flash');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();

app.set('views', __dirname + '/public')
app.set('view engine', 'ejs')

app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
 
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use(expressSession({
    secret: 'my Key',
    resave: true,
    saveUninitialized:true
}))
 
app.use('/', route)
 
app.listen(3000, () => {
    console.log("3000 port is on!")
})