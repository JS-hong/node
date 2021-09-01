const passport = require('passport')

passport.serializeUser(function(user, done) {
    console.log('serializeUser() 호출됨');
    console.log(user.userId);
    console.log(user.password);
    done(null, user); 
}); //user 객체에 세션 데이터 저장
 
passport.deserializeUser(function(user, done) {
    console.log('deserializeUser() 호출됨.'); 
    done(null, user);  
}); //불러옴
