const express = require('express')
const router = express.Router()
const db = require('./mysqlconnect');

router.post('/requestSignUp', function(req,res) {

    const uid = req.body.uid;

    var sql = 'INSERT INTO userDB(user_id) VALUES(?)';
	var params = [uid];
	
	db.query(sql,params,function(err, rows){
		if (err) throw err;
	})

    res.send({data : 'success'});
})

module.exports = router;
