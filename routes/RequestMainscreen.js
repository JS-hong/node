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
            res.send(
                [
                    {
                        id_1 : rows[0].user_id,
                        write_time_1 : rows[0].write_time,
                        subtext_1 : rows[0].subtext,
                        tag_1 : rows[0].tag,
                        post_id_1 : rows[0].post_id
                    },
                    {
                        id_2 : rows[1].user_id,
                        write_time_2 : rows[1].write_time,
                        subtext_2 : rows[1].subtext,
                        tag_2 : rows[1].tag,
                        post_id_2 : rows[1].post_id
                    },
                    {
                        id_3 : rows[2].user_id,
                        write_time_3 : rows[2].write_time,
                        subtext_3 : rows[2].subtext,
                        tag_3 : rows[2].tag,
                        post_id_3 : rows[2].post_id
                    },
                    {
                        id_4 : rows[3].user_id,
                        write_time_4 : rows[3].write_time,
                        subtext_4 : rows[3].subtext,
                        tag_4 : rows[3].tag,
                        post_id_4 : rows[3].post_id
                    },                    {
                        id_5 : rows[4].user_id,
                        write_time_5 : rows[4].write_time,
                        subtext_5 : rows[4].subtext,
                        tag_5 : rows[4].tag,
                        post_id_5 : rows[4].post_id
                    }                    
                ]);
		} 
        else {
            res.send({data : fail});
		}
	})
})

module.exports = router;