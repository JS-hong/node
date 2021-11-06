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
    let randomIndexArray = []

	connection.query(sql,params,function(err,rows,fields){
		if (err) throw err;
        if (rows){       

            function lottoNum (array) {
                if (! array) {
                    var array = [];
                }
                let n = Math.floor(Math.random() * rows.length);

                if (array.length < 5 && array.indexOf(n) < 0) {
                    
                    array.push(n);

                    json.push({
                        uid : rows[n].user_id,
                        title : rows[n].subtext,
                        post_tag : rows[n].tag,
                        language_type : rows[n].language_type,
                        language_thumbnails : rows[n].language_thumbnail,
                        post_id : rows[n].post_id,
                        write_time : rows[n].write_time,
                        writer_nickname : rows[n].writer_nickname,
                        writer_thumbnail : rows[n].writer_thumbnail,
                        line_of_code : rows[n].line_of_code,
                        bookmark_saved : rows[n].bookmark_saved,
                        bookmark : rows[n].bookmark
                        })

                    return lottoNum(array);
                } 
                else if(array.length>5) {
                    return array;
                }
                else
                    return lottoNum(array);
                }
                lottoNum();
            res.send({"feeds": json})
        }
        else 
        {
            res.send({data : 'fail'});
		}
	})
})

module.exports = router;