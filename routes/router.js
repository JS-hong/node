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

module.exports = router