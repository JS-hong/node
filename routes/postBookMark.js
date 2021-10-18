var express = require('express');
var connection = require('./mysqlconnect');
const router = express.Router();

router.get('/postBookmark', function(req,res) {
    
    const uid = req.body.user_id;
    const postid = req.body.post_id;

    var sql = 'INSERT INTO bookmark_db(uid,postid,bookmark) VALUES(?,?,?)';
	var params = [uid,postid,'1'];


    connection.query(sql,params,function(err, rows){
		if (err) throw err;
		if (rows){
            res.send({data : success});
		} 
        else 
        {
            res.send({data : fail});
		}
	})
})

module.exports = router;