const express = require('express');
const router = express.Router();
const connection = require('./mysqlconnect');

router.post('/reqcomment', function(req,res) {

    const uid = req.body.user_id;
	const post_id = req.body.post_id;

	var sql = "select comment_db.comment,comment_db.comment_date, "
	+ "IFNULL((comment_like_db.comment_liked AND comment_like_db.user_id=?),0) comment_liked, "
	+ "comment_db.post_id,comment_db.comment_like,comment_db.comment_uid,comment_db.user_id "
	+ "from comment_db left join comment_like_db "
	+ "on comment_db.comment_uid = comment_like_db.comment_uid "
	+ "where comment_db.post_id=? ";
	
	var params = [uid,post_id];
    var json = new Object;
    var json = [];

	connection.query(sql,params,function(err, rows){
		if (err) throw err;
		if (rows){
			for(i=0;i<rows.length;i++){
				json.push({
					comment : rows[i].comment,
					comment_date : rows[i].comment_date,
					post_id : rows[i].post_id,
					user_id : rows[i].user_id,
					comment_like : rows[i].comment_like, // 좋아요 숫자
					comment_liked : rows[i].comment_liked,// 1/0 구별하는거
					comment_uid : rows[i].comment_uid, //댓글 uid
					})
			}
			res.send({"comment": json});
		} 
        else {
            res.send({data : 'fail'});
		}
	})
})

module.exports = router;