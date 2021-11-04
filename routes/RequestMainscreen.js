var express = require('express');
var connection = require('./mysqlconnect');
const router = express.Router();

router.get('/requestmainscreen', function(req,res) {

    const uid = req.query.user_id; //get 일때는 query post 일때는 body

    var sql = "select PostwriteDB.post_id,IFNULL((bookmark_db.bookmark AND bookmark_db.user_id=?),0) bookmark, "
    + "PostwriteDB.user_id,PostwriteDB.subtext,PostwriteDB.tag, "
    + "PostwriteDB.language_type,PostwriteDB.write_time,PostwriteDB.writer_nickname, "
    + "PostwriteDB.writer_thumbnail,PostwriteDB.language_thumbnail,PostwriteDB.line_of_code,PostwriteDB.bookmark_saved "
    + "from PostwriteDB left join bookmark_db "
    + "on PostwriteDB.post_id = bookmark_db.post_id "
    + "order by write_time desc ";

	var params = [uid];
	
	connection.query(sql,params,function(err, rows,fields){
        const maxValue = Math.max.apply(null, rows);

		if (err) throw err;
		if (rows){
            res.send({
                "feeds": 
                [
                    {
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
                    },
                    {
                        uid : rows[1].user_id,
                        title : rows[1].subtext,
                        post_tag : rows[1].tag,
                        language_type : rows[1].language_type,
                        thumbnail_url : rows[1].language_thumbnail,
                        post_id : rows[1].post_id,
                        write_time : rows[1].write_time,
                        writer_nickname : rows[1].writer_nickname,
                        writer_thumbnail : rows[1].writer_thumbnail,
                        line_of_code : rows[1].line_of_code,
                        bookmark_saved : rows[1].bookmark_saved,
                        bookmark : rows[1].bookmark
                    },
                    {
                        uid : rows[2].user_id,
                        title : rows[2].subtext,
                        post_tag : rows[2].tag,
                        language_type : rows[2].language_type,
                        thumbnail_url : rows[2].language_thumbnail,
                        post_id : rows[2].post_id,
                        write_time : rows[2].write_time,
                        writer_nickname : rows[2].writer_nickname,
                        writer_thumbnail : rows[2].writer_thumbnail,
                        line_of_code : rows[2].line_of_code,
                        bookmark_saved : rows[2].bookmark_saved,
                        bookmark : rows[2].bookmark
                    },
                    {
                        uid : rows[3].user_id,
                        title : rows[3].subtext,
                        post_tag : rows[3].tag,
                        language_type : rows[3].language_type,
                        thumbnail_url : rows[3].language_thumbnail,
                        post_id : rows[3].post_id,
                        write_time : rows[3].write_time,
                        writer_nickname : rows[3].writer_nickname,
                        writer_thumbnail : rows[3].writer_thumbnail,
                        line_of_code : rows[3].line_of_code,
                        bookmark_saved : rows[3].bookmark_saved,
                        bookmark : rows[3].bookmark
                    },                    
                    {
                        uid : rows[4].user_id,
                        title : rows[4].subtext,
                        post_tag : rows[4].tag,
                        language_type : rows[4].language_type,
                        thumbnail_url : rows[4].language_thumbnail,
                        post_id : rows[4].post_id,
                        write_time : rows[4].write_time,
                        writer_nickname : rows[4].writer_nickname,
                        writer_thumbnail : rows[4].writer_thumbnail,
                        line_of_code : rows[4].line_of_code,
                        bookmark_saved : rows[4].bookmark_saved,
                        bookmark : rows[4].bookmark
                    }                    
                ]});
		} 
        else 
        {
            res.send({data : 'fail'});
		}
	})
})

module.exports = router;