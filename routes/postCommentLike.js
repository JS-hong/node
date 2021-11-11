var express = require('express');
var connection = require('./mysqlconnect');
const router = express.Router();

router.post('/postcommentlike', function(req,res) {
    
    const uid = req.body.user_id;
    const comment_id = req.body.comment_uid;

    var sql = 'INSERT INTO comment_like_db(user_id,comment_uid,comment_liked) VALUES(?,?,?)';
	var params = [uid,comment_id,'1'];


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
