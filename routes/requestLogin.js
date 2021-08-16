router.post('/login', passport.authenticate('local-login', {
    failureRedirect: 'loginFail'
    }), (req, res) => {
        sess = req.body.userId;
        res.render('login');
});