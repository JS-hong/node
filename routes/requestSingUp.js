const express = require('express')
const router = express.Router()
const db = require('./mysqlconnect');   

router.post('/requestSignUp', function(req,res) {

    const uid = req.body.uid;

    var sql = 'INSERT INTO userDB(user_id) VALUES(?)';
	var params = [uid];
	
	db.query(sql,params,function(err, rows){
		if (err) throw err;
		if (rows)
        {
            res.send({data : success});
		} 
        else 
        {
            res.send({data : fail});
		}
	})
})

module.exports = requestSignUp;