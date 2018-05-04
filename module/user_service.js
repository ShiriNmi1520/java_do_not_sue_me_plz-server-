let Firebase = require('firebase');

let config = {
    apiKey: "AIzaSyC6V5XWXQCC_zdGWsXPND4OVpwYGS7VsAE",
    authDomain: "buyao-70f4a.firebaseapp.com",
    databaseURL: "https://buyao-70f4a.firebaseio.com",
    projectId: "buyao-70f4a",
    storageBucket: "buyao-70f4a.appspot.com",
    messagingSenderId: "409751210552"
};

let firebaseRef = Firebase.initializeApp(config);

function addUser(email, password, callback) {

    firebaseRef.createUserAndRetrieveDataWithEmailAndPassword({

        email : email,
        password : password

    }, function(error, userData) {

        callback(error, userData.uid);

    });
}


function authenticate(email, password, callback) {

    firebaseRef.authenticate({

        email : email,
        password : password

    }, function(error, authData) {

        callback(error, authData);

    });

}

module.exports = {

    addUser : addUser,
    authenticate : authenticate

};