let express = require('express');
let router = express.Router();
let firebase = require('firebase');

//firebase config setup
let firebaseconfig = {
    apiKey: "<Your api>",
    authDomain: "<Your database url>",
    databaseURL: "<Your database url with https>",
    storageBucket: "<Your storagebucket>"
};

// firebase setup
firebase.initializeApp(firebaseconfig);

//define function
function writeData(uid, name, email){
    firebase.database().ref('users/' + uid).set({
        username  : name,
        email : email
    });
}

router.route('/:id/:name/:email')

    .get((req, res) => {
       let id = req.params.id,
           name = req.params.name,
           email = req.params.email;
       writeData(id, name, email);
       res.send('Data has been writen to database!');
    });

module.exports = router;