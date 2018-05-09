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
//firebase.initializeApp(firebaseconfig);

//define function
function writeData(uid, name, email){
    firebase.database().ref('users/' + uid).set({
        username  : name,
        email : email
    });
}

router.route('/:id/:name/:email')

    .post((req, res) => {
        let id = req.params.id,
            name = req.params.name,
            email = req.params.email;
        writeData(id, name, email);
        res.send("Data sent");
    });

module.exports = router;