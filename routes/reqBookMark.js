var express = require('express');
var connection = require('./mysqlconnect');
const router = express.Router();

router.post('/reqBookmark', function(req,res) {

    const uid = req.body.user_id;

    var sql = "select PostwriteDB.post_id,bookmark_db.bookmark, "
    + "PostwriteDB.user_id,PostwriteDB.subtext,PostwriteDB.tag, "
    + "PostwriteDB.language_type,PostwriteDB.write_time,PostwriteDB.writer_nickname, "
    + "PostwriteDB.writer_thumbnail,PostwriteDB.language_thumbnail,PostwriteDB.line_of_code,PostwriteDB.bookmark_saved "
    + "from PostwriteDB left join bookmark_db "
    + "on PostwriteDB.post_id = bookmark_db.post_id "
    + "where bookmark_db.user_id=? ";

	var params = [uid];
    var feeds = new Object();
    var arr = new Array();


    connection.query(sql,params,function(err,rows,fields){        
		if(err){
            console.log(err);
        }
        else 
        {
            for(var i = 0; i < 5; i++){
                arr = rows[0];
            }
            console.log(arr)
		}
	})
})

module.exports = router;