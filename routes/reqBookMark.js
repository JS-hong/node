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
            for(var i = 0; i < rows.length; i++){
               feeds.put({
                uid : rows[0].user_id,
                title : rows[0].subtext,
                post_tag : rows[0].tag,
                language_type : rows[0].language_type,
                language_thumbnails : rows[0].language_thumbnail,
                post_id : rows[0].post_id,
                write_time : rows[0].write_time,
                writer_nickname : rows[0].writer_nickname,
                writer_thumbnail : rows[0].writer_thumbnail,
                line_of_code : rows[0].line_of_code,
                bookmark_saved : rows[0].bookmark_saved,
                bookmark : rows[0].bookmark           
                })
            }
            res.json({
                feeds
            });
		}
	})
})

module.exports = router;