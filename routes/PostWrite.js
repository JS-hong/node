const express = require('express');
const router = express.Router();
const connection = require('./mysqlconnect');

connection.connect();

router.post('/postwrite', function(req,res) {

    const submain = req.body.submain;
    const main = req.body.main;

    console.log(req.body.submain);
    console.log(req.body.main);

    var sql = 'INSERT INTO test2(sub_main,main,id) VALUES(?,?,?)';
	var params = [submain,main,sess];
	
	connection.query(sql,params,function(err, rows){
		if (err) throw err;
		if (sess){
            res.send({data : success});
		} 
        else {
            res.send({data : fail});
		}
	})
})

module.exports = router;