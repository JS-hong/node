const express = require('express');
const router = express.Router();
const connection = require('./mysqlconnect');

connection.connect();

router.post('/postcomment', function(req,res) {

    const post_id = req.body.main;

	var sql = "select PostwriteDB.post_id,IFNULL((bookmark_db.bookmark AND bookmark_db.user_id=?),0) bookmark, "
    + "PostwriteDB.user_id,PostwriteDB.subtext,PostwriteDB.tag, "
    + "PostwriteDB.language_type,PostwriteDB.write_time,PostwriteDB.writer_nickname, "
    + "PostwriteDB.writer_thumbnail,PostwriteDB.language_thumbnail,PostwriteDB.line_of_code,PostwriteDB.bookmark_saved "
    + "from PostwriteDB left join bookmark_db "
    + "on PostwriteDB.post_id = bookmark_db.post_id "
    + "order by write_time desc ";
	
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