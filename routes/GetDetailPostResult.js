var express = require('express');
var connection = require('./mysqlconnect');
const router = express.Router();

router.get('/getdetailpostresult', function(req,res) {

    const postid = req.query.post_id; //get data 받음

    var sql = 'select post_id,maintext from PostwriteDB where post_id=? ';
	var params = [postid];
	
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