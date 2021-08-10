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

var id
{
   id:'Pong'
}
  app.post('/pushdata', (req, res) => { //request response
     var inputData;
     req.on('data', (data) => {
       inputData = JSON.parse(data);
     });
  
     req.on('end', () => {
       console.log("user_id : "+inputData.user_id);
     });

     res.write("ok");
     res.json(id)
     res.end();
  });   //to Android 
/*
app.post('/id', (req, res) => {
    res.write(id);
    res.json(id)
  }); // get 방식 전달 id라는 json 뿌려주기?
*/
app.use('/', route)

app.listen(port, () => {
    console.log("port is on!")
})
