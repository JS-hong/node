var express = require('express');
var connection = require('./routes/mysqlconnect');
var app = express();

connection.connect();

router.post('/requestmainscreen', function(req,res) {

    const submain = req.body.submain;

    var sql = 'select * postDB';
	var params = [submain];
	
	connection.query(sql,params,function(err, rows){
		if (err) throw err;
		if (sess){
            res.send({
                        data : success,
                        data : success,
                        data : success,
                        data : success,
                        data : success,
                        data : success,
                        data : success
                    });
		} 
        else {
            res.send({data : fail});
		}
	})
})
