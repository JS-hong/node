var express = require('express');
var db = require('./mysqlconnect');

router.get('/getdetailpostresult', function(req,res) {

    const postid = req.query.post_id; //post data 받음

    var sql = 'select post_id,maintext from PostwriteDB where post_id=? ';
	var params = [postid];
	
	db.query(sql,params,function(err,rows){
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
