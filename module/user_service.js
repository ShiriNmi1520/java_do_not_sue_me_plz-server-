

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