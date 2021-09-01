const express = require('express');
const router = express.Router();
const db = require('./mysqlconnect');

router.post('/postwrite', function(req,res) {

    const userId = req.body.userId;
    const maintext = req.body.maintext;
    const subtext = req.body.subtext;
    const tag = req.body.tag;
    const write_time = req.body.id;
    const language_type = req.body.id;

    var sql = 'INSERT INTO PostwriteDB(id,maintext,subtext,tag,write_time,language_type) VALUES(?,?,?,?,?,?,?)';
	var params = [userId,maintext,subtext,lineofcode,tag,write_time,language_type];
	
	db.query(sql,params,function(err, rows){
		if (err) throw err;
		if (rows)
        {
            res.send({data : success});
		} 
        else 
        {
            res.send({data : fail});
		}
	})
})

module.exports = router;