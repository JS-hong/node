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

    connection.query(sql,params,function(err,rows){
        const maxValue = Math.max.apply(null, rows);
		if (err) throw err;
		if (rows){

            try {
                for(var i=0 ;i<maxValue;i++){
                console.log(i)
                console.log(maxValue)
                }           
            }
            catch(e){
                console.log('error');
            }    
		} 
        else 
        {
            res.send({data : fail});
		}
	})
})

module.exports = router;