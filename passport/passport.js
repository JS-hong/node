const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const mysql = require('../routes/mysqlconnect');

passport.use('local-login', new LocalStrategy({
    usernameField: 'userId', //폼 데이터 넘어옴
    passwordField: 'password',//위와 같음
    },
    function(userId,password,done){	
        mysql.query('select pwd from test1 where id=?',userId,(err,result)=>{
            if(err){
                return done(null, false);
            }
            else if(result[0].pwd != password){
                return done(null, false);
            }
            else{
                const userf = {
                   id: userId,
                   pwd: password 
                }
                const userfJson = JSON.stringify(userf)
                console.log(userfJson)

                return done(null,{userId : userId, password: password}) 
            }             
        }) //connection query end
    }))

passport.use('local-sign', new LocalStrategy({
    usernameField: 'userId',
    passwordField: 'password',
    } , 
    function(userId, password, done){	
        connection.query('INSERT INTO test1(id,pwd) VALUES(?,?)',[userId,password],(err,result)=>{
            if(err){
                return done(null, false);
            }
            else{
                return done( null, {userId : userId, password: password})
            } 
            
    })
}))

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
