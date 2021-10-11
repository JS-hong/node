const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {title: "인덱스"})
})

router.get('/sign', (req, res) => {
    res.render('sign', {title: "가입"})
})  

module.exports = router