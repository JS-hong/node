<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const passport = require('../database/passport')
const mysql = require('mysql');
const connection_info=({
  host     : '0.0.0.0',
  user     : 'line',
  password : '7385',
  database : 'node_db'
});

let connection = mysql.createConnection(connection_info);
connection.connect();


router.get('/', (req, res) => {
    res.render('index_jsontest', {title: "인덱스"})
})

router.get('/sign', (req, res) => {
    res.render('sign', {title: "가입"})
})

router.get('/write', (req, res) => {
    res.render('write', {title: "작성"})
})

router.post('/writed', function(request, response) {

    const submain = request.body.submain;
    const main = request.body.main;

    console.log(request.body.submain);
    console.log(request.body.main);

    var sql = 'INSERT INTO test2(sub_main,main,id) VALUES(?,?,?)';
	var params = [submain,main,sess];
	
	connection.query(sql,params,function(err, rows){
		if (err) throw err;
		if (sess){
            response.render('login');
		} 
        else {
            response.redirect('index');
		}
	})
})


router.get('/logout', (req, res) => {
        req.session.destroy(function(err){
            if(err) throw err;
            console.log('세션 삭제하고 로그아웃됨');
            res.redirect('/');
        });
});


router.post('/login', passport.authenticate('local-login', {
    failureRedirect: 'loginFail'
    }), (req, res) => {
        sess = req.body.userId;
        res.render('login');
});
    
router.post('/sign', passport.authenticate('local-sign', {
    successRedirect : '/index', 
    failureRedirect : '/loginFail', 
    failureFlash : true 
    }))

=======
const express = require('express')
const router = express.Router()
const passport = require('../database/passport')
const mysql = require('mysql');
const connection_info=({
  host     : '',
  user     : 'user1',
  password : '7385',
  database : 'node_db'
});

let connection = mysql.createConnection(connection_info);
connection.connect();


router.get('/', (req, res) => {
    res.render('index_jsontest', {title: "인덱스"})
})

router.get('/sign', (req, res) => {
    res.render('sign', {title: "가입"})
})

router.get('/write', (req, res) => {
    res.render('write', {title: "작성"})
})

router.post('/writed', function(request, response) {

    const submain = request.body.submain;
    const main = request.body.main;

    console.log(request.body.submain);
    console.log(request.body.main);

    var sql = 'INSERT INTO test2(sub_main,main,id) VALUES(?,?,?)';
	var params = [submain,main,sess];
	
	connection.query(sql,params,function(err, rows){
		if (err) throw err;
		if (sess){
            response.render('login');
		} 
        else {
            response.redirect('index');
		}
	})
})


router.get('/logout', (req, res) => {
        req.session.destroy(function(err){
            if(err) throw err;
            console.log('세션 삭제하고 로그아웃됨');
            res.redirect('/');
        });
});


router.post('/login', passport.authenticate('local-login', {
    failureRedirect: 'loginFail'
    }), (req, res) => {
        sess = req.body.userId;
        res.render('login');
});
    
router.post('/sign', passport.authenticate('local-sign', {
    successRedirect : '/index', 
    failureRedirect : '/loginFail', 
    failureFlash : true 
    }))

>>>>>>> e6e19f75ac1f2fa899590e75a4f7a530adcc5b7c
module.exports = router