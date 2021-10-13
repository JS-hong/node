var express = require('express');
var connection = require('./mysqlconnect');
const router = express.Router();

router.get('/requestmainscreen', function(req,res) {

    const uid = req.body.user_id;

    var sql = 'select * from PostwriteDB';
	var params = [uid];
	
	connection.query(sql,function(err, rows){
		if (err) throw err;
		if (rows){
            res.send({
                "feeds": 
                [
                    {
                        uid : rows[0].user_id,
                        write_time : rows[0].write_time,
                        title : rows[0].subtext,
                        post_tag : rows[0].tag,
                        content_language : rows[0].language_type,
                        post_id : rows[0].post_id
                    },
                    {
                        uid : rows[1].user_id,
                        write_time : rows[1].write_time,
                        title : rows[1].subtext,
                        post_tag : rows[1].tag,
                        content_language : rows[1].language_type,
                        post_id : rows[1].post_id
                    },
                    {
                        uid : rows[2].user_id,
                        write_time : rows[2].write_time,
                        title : rows[2].subtext,
                        post_tag : rows[2].tag,
                        content_language : rows[2].language_type,
                        post_id : rows[2].post_id
                    },
                    {
                        uid : rows[3].user_id,
                        write_time : rows[3].write_time,
                        title : rows[3].subtext,
                        post_tag : rows[3].tag,
                        content_language : rows[3].language_type,
                        post_id : rows[3].post_id
                    },                    {
                        uid : rows[4].user_id,
                        write_time : rows[4].write_time,
                        title : rows[4].subtext,
                        post_tag : rows[4].tag,
                        content_language : rows[4].language_type,
                        post_id : rows[4].post_id
                    }                    
                ]});
		} 
        else 
        {
            res.send({data : fail});
		}
	})
})

module.exports = router;