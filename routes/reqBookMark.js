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
    var json = new Object;
    var json = {};
    var arr = new Array();


    connection.query(sql,params,function(err,rows,fields){        
		if(err){
            console.log(err);
        }
        if (rows){
            for(i=0;i<rows.length;i++){
                json.put({
                    uid : rows[i].user_id,
                    title : rows[i].subtext,
                    post_tag : rows[i].tag,
                    language_type : rows[i].language_type,
                    language_thumbnails : rows[i].language_thumbnail,
                    post_id : rows[i].post_id,
                    write_time : rows[i].write_time,
                    writer_nickname : rows[i].writer_nickname,
                    writer_thumbnail : rows[i].writer_thumbnail,
                    line_of_code : rows[i].line_of_code,
                    bookmark_saved : rows[i].bookmark_saved,
                    bookmark : rows[i].bookmark
                })
            }
        }
	})
})

module.exports = router;