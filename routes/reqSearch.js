var express = require('express');
var connection = require('./mysqlconnect');
const router = express.Router();

router.get('/getmypost', function(req,res) {

    const search_dt = req.query.search_data; //get data 받음

    var sql = 'select * from PostwriteDB where maintext=? or subtext=? ';
	var params = [search_dt,search_dt];
	
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
          res.send({"feeds": json})
		} 
        else {
            res.send({
                        data : fail
                    });
		}
      })
    })

module.exports = router;