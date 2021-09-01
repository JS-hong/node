const express = require('express');
const router = express.Router();

router.post('/logout', function(req, res) { 
    req.session.destroy();
    res.send({data: 'session destroy'}); 
    console.log('session을 삭제하였습니다.'); 
});

module.exports = router;