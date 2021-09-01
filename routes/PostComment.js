const express = require('express');
const router = express.Router();
const connection = require('./mysqlconnect');

connection.connect();

router.post('/postcomment', function(req,res) {

    const Comment = req.body.Comment;
    const Comment_date = req.body.Comment_date;
    const user_id = req.body.user_id;
    const post_id = req.body.main;

    var sql = 'INSERT INTO PostComment(sub_main,main,id) VALUES(?,?,?)';
	var params = [Comment,Comment_date,user_id,post_id];
	
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