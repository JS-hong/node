const express = require('express');
const router = express.Router();
const connection = require('./mysqlconnect');

router.post('/reqcomment', function(req,res) {

    const uid = req.body.user_id;
	const post_id = req.body.post_id;

	var sql = "select comment_db.comment,comment_db.comment_date, "
	+ "IFNULL((comment_like_db.comment_liked AND comment_like_db.user_id= ? ),0) comment_liked, "
	+ "comment_db.post_id,comment_db.comment_like,comment_db.comment_uid "
	+ "from comment_db left join comment_like_db "
	+ "on comment_db.comment_uid = comment_like_db.comment_uid "
	+ "where comment_db.post_id= ? "
	+ "order by comment_db.comment_date desc ";
	
	var params = [uid,post_id];
    var json1 = new Object;
    var json1 = [];

	connection.query(sql,params,function(err, rows){
		if (err){
			throw err;
		}
		if (rows){
			for(i=0;rows.length;i++){
				json.push({
					comment : rows[i].comment,
					comment_date : rows[i].comment_date,
					post_id : rows[i].post_id,
					uid : rows[i].user_id,
					comment_like : rows[i].comment_like,
					comment_liked : rows[i].comment_liked,
					comment_uid : rows[i].comment_uid,
					})
			}
			res.send({"comment": json1});
		} 
        else {
            res.send({data : 'fail'});
		}
	})
})

module.exports = router;