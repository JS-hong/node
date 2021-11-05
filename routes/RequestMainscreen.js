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
    var arr = new Array;

	connection.query(sql,params,function(err,rows,fields){
		if (err) throw err;
        if (rows){       
            var n = 0;
            do{
                var random = Math.floor(Math.random()*rows.length);
                json.push({
                    uid : rows[random].user_id,
                    title : rows[random].subtext,
                    post_tag : rows[random].tag,
                    language_type : rows[random].language_type,
                    language_thumbnails : rows[random].language_thumbnail,
                    post_id : rows[random].post_id,
                    write_time : rows[random].write_time,
                    writer_nickname : rows[random].writer_nickname,
                    writer_thumbnail : rows[random].writer_thumbnail,
                    line_of_code : rows[random].line_of_code,
                    bookmark_saved : rows[random].bookmark_saved,
                    bookmark : rows[random].bookmark
                    })
                arr.push(rows[random].post_id)    
                    n++;
            }
            while(n<5){
                var random = Math.floor(Math.random()*rows.length);
                for(i=0;i<arr.length;i++){
                    if(arr[i] == rows[random].post_id){
                        n--;
                    }
                    else{
                        json.push({
                        uid : rows[random].user_id,
                        title : rows[random].subtext,
                        post_tag : rows[random].tag,
                        language_type : rows[random].language_type,
                        language_thumbnails : rows[random].language_thumbnail,
                        post_id : rows[random].post_id,
                        write_time : rows[random].write_time,
                        writer_nickname : rows[random].writer_nickname,
                        writer_thumbnail : rows[random].writer_thumbnail,
                        line_of_code : rows[random].line_of_code,
                        bookmark_saved : rows[random].bookmark_saved,
                        bookmark : rows[random].bookmark
                        })
                        n++;
                    }
                }
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