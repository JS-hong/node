const expressSession = require('express-session');
const port = 3000;
var passport = require('passport');
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var flash = require('connect-flash');
var db = require('./routes/mysqlconnect');
var route = require('./routes/router');
var reqSearch = require('./routes/reqSearch');
var reqMain = require('./routes/RequestMainscreen');
var reqDetail = require('./routes/GetDetailPostResult');
var reqSign = require('./routes/requestSignUp');
var Postwrite = require('./routes/PostWrite');
var reqBookmark = require('./routes/reqBookMark');
var postBookmark = require('./routes/postBookMark');
var cancleBookmark = require('./routes/cancleBookmark');
var postComment = require('./routes/PostComment');
var reqcomment = require('./routes/reqComment');
var cancleLike = require('./routes/cancleCommentLike');
var postLike = require('./routes/postCommentLike');

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
    secret: 'feng',
    resave: false,
    saveUninitialized:true,
    cookie:{maxAge:(3.6e+6)*24}
}))

app.use('/', route)
app.use(reqSign)
app.use(reqMain)
app.use(Postwrite)
app.use(reqBookmark)
app.use(postBookmark)
app.use(cancleBookmark)
app.use(reqDetail)
app.use(reqSearch)
app.use(postComment)
app.use(reqcomment)
app.use(postLike)
app.use(cancleLike)

app.get('/pushdata', (req, res) => {
  var data = req.query.data;
  res.send({data: data});
});

app.listen(port,() => {
    console.log("3000 port is on!")
})
