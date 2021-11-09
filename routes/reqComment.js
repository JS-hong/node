const express = require('express');
const router = express.Router();
const connection = require('./mysqlconnect');

router.post('/reqcomment', function(req,res) {

    var user_id = req.body.user_id;
    var json = new Object;
    var json = [];
	var params = [user_id];

	var sql = "select comment_db.comment,comment_db.comment_date, "
	"IFNULL((comment_like_db.comment_liked AND comment_like_db.user_id=?),0) comment_liked, "
	"comment_db.post_id,comment_db.comment_like,comment_db.comment_uid, "
	"from comment_db left join comment_like_db "
	"on comment_db.comment_uid = comment_like_db.comment_uid "
	"order by write_time desc ";
	
	connection.query(sql,params,function(err, rows){
		if (err) throw err;
		if (rows){
			for(i=0;rows.length;i++){
				json.push({
					comment : rows[i].comment,
					comment_date : rows[i].comment_date,
					uid : rows[i].user_id,
					post_id : rows[i].language_type,
					comment_like : rows[i].comment_like,
					comment_uid : rows[i].comment_uid,
					write_time : rows[i].write_time,
					writer_nickname : rows[i].writer_nickname,
					})
			}
			res.send({"comment": json})
		} 
        else {
            res.send({data : fail});
		}
	})
})

module.exports = router;