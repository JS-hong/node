const express = require('express');
const router = express.Router();
const passport = require('passport');
const database = require('./firebase/config');
const reqLogin = require('./requestLogin');

router.get('/', (req, res) => {
    res.render('index', {title: "인덱스"})
})

router.get('/sign', (req, res) => {
    res.render('sign', {title: "가입"})
})

router.post('/signed', passport.authenticate('local-sign', {
    successRedirect : '/index', 
    failureRedirect : '/loginFail', 
    failureFlash : true 
    }))
    
/*

router.get('/logout', (req, res) => {
        req.session.destroy(function(err){
            if(err) throw err;
            console.log('세션 삭제하고 로그아웃됨');
            res.redirect('/');
        });
});
*/

module.exports = router