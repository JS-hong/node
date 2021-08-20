const express = require('express');
const passport = require('../passport/passport')
const router = express.Router();

router.post('/login',passport.authenticate('local-login'),
    function(req, res) {
        sess = req.body.userId;
        res.send({data: sess});
});

module.exports = router;