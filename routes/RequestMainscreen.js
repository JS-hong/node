var express = require('express');
var connection = require('./mysqlconnect');
const router = express.Router();

router.post('/requestmainscreen', function(req,res) {

    const uid = req.body.user_id; //get 일때는 query post 일때는 body

    var sql = "select PostwriteDB.post_id,IFNULL((bookmark_db.bookmark AND bookmark_db.user_id=?),0) bookmark, "
    + "PostwriteDB.user_id,PostwriteDB.subtext,PostwriteDB.tag, "
    + "PostwriteDB.language_type,PostwriteDB.write_time,PostwriteDB.writer_nickname, "
    + "PostwriteDB.writer_thumbnail,PostwriteDB.language_thumbnail,PostwriteDB.line_of_code,PostwriteDB.bookmark_saved "
    + "from PostwriteDB left join bookmark_db "
    + "on PostwriteDB.post_id = bookmark_db.post_id "
    + "order by write_time desc ";

	var params = [uid];
    var json = new Object;
    var json = [];
    
	connection.query(sql,params,function(err,rows,fields){
		if (err) throw err;
        if (rows){
            for(i=0;i<5;i++){
                json.push({
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
            res.send({"feeds": json})
        }
        else 
        {
            res.send({data : 'fail'});
		}
	})
})

module.exports = router;