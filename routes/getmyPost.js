var express = require('express');
var connection = require('./mysqlconnect');
const router = express.Router();

router.post('/getmypost', function(req,res) {

    const uid = req.body.user_id; //get data 받음

    var sql = 'select  from PostwriteDB where user_id=? ';
	var params = [uid];
	
	connection.query(sql,params,function(err,rows){
		if (err) throw err;
		if (rows){
            res.send({
                        post_id : rows[0].post_id,
                        maintext : rows[0].maintext,
                    });
		} 
        else {
            res.send({
                        data : fail
                    });
		}
	})
})

module.exports = router;