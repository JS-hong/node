var express = require('express');
var connection = require('./mysqlconnect');
const router = express.Router();

router.post('/canclekcommentlike', function(req,res) {
    
    const uid = req.body.user_id;
    const comment_id = req.body.comment_uid;

    var sql = 'delete from comment_like_db where comment_uid=? AND user_id=? ';
	var params = [comment_id,uid];


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