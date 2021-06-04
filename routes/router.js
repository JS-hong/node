const express = require('express')
const router = express.Router()
const passport = require('../database/passport')
 
router.get('/', (req, res) => {
    res.render('index', {title: "인덱스"})
})


router.post('/login', passport.authenticate('local-login', {
    successRedirect : '/loginSuccess', 
    failureRedirect : '/loginFail', 
    failureFlash : true 
}))

router.post('/sign', passport.authenticate('local-sign', {
    successRedirect : '/loginSuccess', 
    failureRedirect : '/loginFail', 
    failureFlash : true 
}))

router.get('/loginSuccess', (req, res) => {
    res.render('loginSuccess')
})
router.get('/loginFail', (req, res) => {
    res.render('loginFail')
})
 
 
module.exports = router