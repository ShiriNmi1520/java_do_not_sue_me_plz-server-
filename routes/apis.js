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
let database = firebase.database();

//define function
function writeData(uid, name, email){
    firebase.database().ref('users/' + uid).set({
        username : name,
        email : email
    });
}

router.route('/images/:id')

    .get((req, res) => {
        res.json({
            id: req.params.id,
            message: "[Get] Api for image: " + req.params.id
        });

    })

    .post((req, res) => {
        res.json({
            id: req.params.id,
            message: "[Post] Api for image: " + req.params.id
        })
    })

    .put((req, res) => {
        res.json({
            id: req.params.id,
            message: "[Put] Api for image: " + req.params.id
        })
    })

    .delete((req, res) => {
        res.json({
            id: req.params.id,
            message: "[Delete] Api for image: " + req.params.id
        })
    });

router.route('/images/write/:id')

    .get((req, res) => {
        let id = req.params.id,
            message = "Welcome: " + id;
        writeData(id, "test", "test");
        res.send(message);
    });

router.get('/images', (req, res) => {
    res.json({message: "First API!"});
});

module.exports = router;