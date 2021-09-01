const express = require('express');
const router = express.Router();

router.post('/login', function(req, res) { 
    var userId = req.query.userId;     
    if(req.session.user)
    {
        console.log('세션이 이미 존재합니다.');
    }
    
    else{
        req.session.user = 
        {
            "userId" : userId,
        }
        console.log('세션 저장 완료!');
    }
        res.send({  data: 'success'  });
});

module.exports = router;