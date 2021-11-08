var express = require('express');
var connection = require('./mysqlconnect');
const router = express.Router();

router.post('/reqsearch', function(req,res) {
    
    const uid = req.body.user_id;
    const search_dt = req.body.search_data; //query = get data body =  받음
    var sql = "select PostwriteDB.post_id,IFNULL((bookmark_db.bookmark AND bookmark_db.user_id=?),0) bookmark, "
    + "PostwriteDB.user_id,PostwriteDB.subtext,PostwriteDB.tag, "
    + "PostwriteDB.language_type,PostwriteDB.write_time,PostwriteDB.writer_nickname, "
    + "PostwriteDB.writer_thumbnail,PostwriteDB.language_thumbnail,PostwriteDB.line_of_code,PostwriteDB.bookmark_saved "
    + "from PostwriteDB left join bookmark_db "
    + "on PostwriteDB.post_id = bookmark_db.post_id "
    + "where maintext=? or subtext=? ";
	var params = [uid,search_dt,search_dt];
	
	connection.query(sql,params,function(err,rows){
		if (err) throw err;
        if (rows){
            for (i=0; i<5; i++) {   //check if there is any duplicate index
                random = Math.floor(Math.random() * rows.length)
                if (randomIndexArray.indexOf(random) === -1) {
                  randomIndexArray.push(random)

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
                } 
                else { //if the randomNum is already in the array retry
                  i--
                }
              }
          res.send({"search": json})
		} 
        else {
            res.send({
                        data : fail
                    });
		}
      })
    })

module.exports = router;