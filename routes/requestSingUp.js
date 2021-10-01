const express = require('express')
const router = express.Router()
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
firebase.initializeApp(firebaseConfig);
    

router.post('/requestSignUp', function(req,res) {

    const email = req.body.email; //id post 수신
    const password = req.body.password; // password 수신

            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    alert('회원가입이 완료되었습니다.')
                })
                .catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(error.code)
                });
        })

module.exports = requestSignUp;