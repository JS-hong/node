const express = require('express')
const router = express.Router()

router.post('/requestSignUp', function(req,res) {

    const id = req.body.id; //id post 수신
    const password = req.body.password; // password 수신
    const nickname = req.body.nickname;

    var sql = 'INSERT INTO signUpDB(id,password,nickname,uid) VALUES(?,?,?,?)';
	var params = [id,password,nickname,uid];
	
	connection.query(sql,params,function(err, rows){
		if (err){
            throw err
        }; 
        if(rows){
            res.send({result: "success"})
        }
        else {
            res.send({result: "fail"});
		}
	})
})

module.exports = requestSignUp;

