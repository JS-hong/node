const express = require('express');
const router = express.Router();
const connection = require('./mysqlconnect');

connection.connect();

router.post('/postcomment', function(req,res) {

    const post_id = req.body.main;

    var sql = 'select * from comment_db where post_id = ? order by aaa';
	var params = [post_id];
	
	connection.query(sql,params,function(err, rows){
		if (err) throw err;
		if (rows){
            res.send({
                
            });
		} 
        else {
            res.send({data : fail});
		}
	})
})

module.exports = router;