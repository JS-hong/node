var express = require('express');
var connection = require('./mysqlconnect');
const router = express.Router();

router.post('/canclebookmark', function(req,res) {
    
    const uid = req.body.user_id;
    const postid = req.body.post_id;

    var sql = 'delete bookmark_db where post_id=?';
	var params = [postid];


    connection.query(sql,params,function(err, rows){
		if (err) throw err;
		if (rows){
            res.send({data : 'success'});
		} 
        else 
        {
            res.send({data : fail});
		}
	})
})

module.exports = router;