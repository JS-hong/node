var express = require('express');
var connection = require('./mysqlconnect');
const router = express.Router();

router.get('/reqBookmark', function(req,res) {

    const uid = req.body.user_id;

    var sql = 'select * from';
	var params = [uid];

    connection.query(sql,params,function(err, rows){
		if (err) throw err;
		if (rows){
            res.send
            ({

            });
		} 
        else 
        {
            res.send({data : fail});
		}
	})
})

module.exports = router;