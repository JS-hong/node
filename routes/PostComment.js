const express = require('express');
const router = express.Router();
const connection = require('./mysqlconnect');

router.post('/postcomment', function(req,res) {

    const comment = req.body.comment;
    const user_id = req.body.user_id;
    const post_id = req.body.post_id;

    var sql = 'INSERT INTO comment_db(comment,user_id,post_id,comment_like) VALUES(?,?,?,?) ';
	var params = [comment,user_id,post_id,'0'];
	
	connection.query(sql,params,function(err, rows){
		if (err) throw err;
		if (rows){
            res.send({data : "success"});
		} 
        else {
            res.send({data : "fail"});
		}
	})
})

module.exports = router;