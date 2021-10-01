const express = require('express');
const router = express.Router();
const firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyBKSB7qLEtAJyYrPUwLjMKsfRnFnF4faD4",
    authDomain: "helloworld-4d72e.firebaseapp.com",
    databaseURL: "https://helloworld-4d72e-default-rtdb.firebaseio.com",
    projectId: "helloworld-4d72e",
    storageBucket: "helloworld-4d72e.appspot.com",
    messagingSenderId: "744612360228",
    appId: "1:744612360228:web:ad72f1b0228bb9acd228b1",
    measurementId: "G-J36G382S67"  
  };

router.post('/requsetLogin', function(req, res) { 

    const email = req.body.email;//id post 수신
    const password = req.body.password; // password 수신

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    } else {
        firebase.app() // 이미 초기화되었다면, 초기화 된 것을 사용함
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        var user = userCredential.user;
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
/*
    if(req.session.user){
        console.log('세션이 이미 존재합니다.');
    }    
    else{   
        req.session.user = {
            "userId" : userId,
        }        
    var userId = req.query.user;
        console.log('세션 저장 완료!');
    }
*/
        res.send({  data: 'success'  });
});

module.exports = router;