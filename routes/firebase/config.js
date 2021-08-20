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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let database = firebase.database();

  module.exports = database;