const express = require('express');
const router = express.Router();
const connection = require('./mysqlconnect');

connection.connect();

router.post('/postcomment', function(req,res) {

    const comment = req.body.comment;
    const user_id = req.body.user_id;
    const post_id = req.body.main;

    var sql = 'INSERT INTO PostComment(comment,user_id,post_id) VALUES(?,?,?)';
	var params = [comment,user_id,post_id];
	
	connection.query(sql,params,function(err, rows){
		if (err) throw err;
		if (rows){
            res.send({data : success});
		} 
        else {
            res.send({data : fail});
		}
	})
})

module.exports = router;