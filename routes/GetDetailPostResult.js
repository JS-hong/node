var express = require('express');
var db = require('./mysqlconnect');

router.post('/getdetailpostresult', function(req,res) {

    const postid = req.body.post_id; //post data 받음

    var sql = 'select * postDB where post_id=?';
	var params = [postid];
	
	db.query(sql,params,function(err,rows){
		if (err) throw err;
		if (rows){
            res.send({
                        post_id : rows[0].post_id,
                        id : rows[0].id,
                        maintext : rows[0].maintext,
                        subtext : rows[0].subtext,
                        lineofcode : rows[0].lineofcode,
                        write_time : rows[0].write_time,
                        tag : rows[0].tag,
                        language_type : rows[0].language_type
                    });
		} 
        else {
            res.send({
                        data : fail
                    });
		}
	})
})
