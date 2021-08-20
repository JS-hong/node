const express = require('express');
const router = express.Router();
const connection = require('./mysqlconnect');

connection.connect();

router.post('/postwrite', function(req,res) {

    const submain = request.body.submain;
    const main = request.body.main;

    console.log(request.body.submain);
    console.log(request.body.main);

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