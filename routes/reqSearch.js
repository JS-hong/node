var express = require('express');
var connection = require('./mysqlconnect');
const router = express.Router();

router.get('/getmypost', function(req,res) {

    const search_dt = req.query.search_data; //get data 받음

    var sql = 'select * from PostwriteDB where maintext=? or subtext=? ';
	var params = [search_dt,search_dt];
	
	connection.query(sql,params,function(err,rows){
        const maxValue = Math.max.apply(null, rows);
		if (err) throw err;
		for(var i = 0 ; i< maxValue ; i++){
        if (rows){
            res.send({
                        post_id : rows[i].post_id,
                        maintext : rows[i].maintext,
                    });
		} 
        else {
            res.send({
                        data : fail
                    });
		}
      }
	})
})

module.exports = router;