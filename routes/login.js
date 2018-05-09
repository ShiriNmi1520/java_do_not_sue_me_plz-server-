let express = require('express');
let router = express.Router();
let firebase = require('firebase');

//firebase config setup
let firebaseconfig = {
    apiKey: "AIzaSyC6V5XWXQCC_zdGWsXPND4OVpwYGS7VsAE",
    authDomain: "buyao-70f4a.firebaseapp.com",
    databaseURL: "https://buyao-70f4a.firebaseio.com",
    storageBucket: "buyao-70f4a.appspot.com"
};

// firebase setup
// firebase.initializeApp(firebaseconfig);

// define function
function login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password);
    if (error.code) {
        res.json({
            status : false,
            message : "Cannot login to firebase"
        })
    }
    else {
        res.json({
            status : true,
            message : "Logined"
        })
    }
}

module.exports = router;